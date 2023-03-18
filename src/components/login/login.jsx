import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "../styles/form.scss";

export default function login() {
	const [email, setEmail]= useState('');
	const [password, setPassword] = useState('');

	const handleSubmit =(e)=>{
    e.preventDefault()

	 const user ={
		email,
		password
	 };
     console.log(user)
	};

	return (
		<form className="form form--page" onSubmit={handleSubmit}>
			<div className="form__group form__group--page">
				<label className="form__label">Email</label>
				<input
					className="form__field"
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e)=> setEmail(e.target.value)}
		
				/>
			</div>

			<div className="form__group form__group--page">
				<label className="form__label">Password</label>
				<input
					className="form__field"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e)=> setPassword(e.target.value)}
				/>
			</div>

			<div className="form__group form__group--page">
				<input className="form__btn" type="submit" value="Login" />
			</div>

			<footer>
				Dont have an account? <Link to="/register">Register</Link>
			</footer>
		</form>
	);
}
