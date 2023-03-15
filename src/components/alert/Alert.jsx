import "./alert.scss";
import React from "react";

export default function Alert({ type, error }) {
	const message = error ? error.message : "";
	const details = error?.details?.errors ? error?.details?.errors : [];
	return (
		<div className={`alert alert--${type}`}>
			<p className='alert__message'>{message}</p>
			<ul className="alert__details">
				{details.map((detail, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li className='alert__detail' key={index}>
						{detail.message}
					</li>
					
				))}
			</ul>
		</div>
	);
}
