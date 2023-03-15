import Alert from "../alert/Alert";
import "../styles/form.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState({});

	// send data to server/backend
	const registerUser = async (user) => {
		if (user.password !== user.confirmPassword) {
			setError({ message: "Password do not match" });
			return;
		}
		try {
			const res = await axios.post(
				"http://localhost:1337/api/auth/local/register",
				user,
			);
			setError({});

			//clear form fields
			setFirstName("");
			setLastName("");
			setEmail("");
			setPassword('')
			setConfirmPassword('')

			console.log(res);
		} catch (err) {
			setError(err.response.data.error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			firstName,
			lastName,
			username: email,
			email,
			password,
			confirmPassword,
		};
		// console.log(user);
		registerUser(user);
	};
	return (
		<>
			{error.message && <Alert type='error' error={error} />}
			<form className="form form--page" onSubmit={handleSubmit}>
				<div className="form__group form__group--page">
					<label className="form__label">First name</label>
					<input
						className="form__field"
						type="text"
						value={firstName}
						placeholder="First name"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>

				<div className="form__group form__group--page">
					<label className="form__label">Last name</label>
					<input
						className="form__field"
						type="text"
						value={lastName}
						placeholder="Last name"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div className="form__group form__group--page">
					<label className="form__label">Email</label>
					<input
						className="form__field"
						type="text"
						value={email}
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form__group form__group--page">
					<label className="form__label">Choose password</label>
					<input
						className="form__field"
						type="password"
						placeholder="Choose password"
						autoComplete="off"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="form__group form__group--page">
					<label className="form__label">Confirm Password</label>
					<input
						className="form__field"
						type="password"
						placeholder="Confirm Password"
						autoComplete="off"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>

				<div className="form__group form__group--page">
					<input className="form__btn" type="submit" value="Register" />
				</div>

				<footer>
					Already have an account? <Link to='/login'>Login</Link>
				</footer>
			</form>
		</>
	);
}
