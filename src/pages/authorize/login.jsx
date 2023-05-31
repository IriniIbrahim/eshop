import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authorize.css";

export const Login = (props) => {
	const [email, setEmail] =
		useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	const navigate = useNavigate();

	return (
		<div className="auth-form-container">
			<form
				className="login-form"
				onSubmit={handleSubmit}
			>
				<h2 className="headerstyle">
					Login
				</h2>
				<label
					htmlFor="email"
					className="lblform"
				>
					Email:
				</label>
				<input
					className="inputform"
					value={email}
					onChange={(e) =>
						setEmail(e.target.value)
					}
					type="email"
					placeholder="youremail@gmail.com"
					id="email"
					name="email"
				/>
				<label
					htmlFor="password"
					className="lblform"
				>
					Password:
				</label>
				<input
					className="inputform"
					value={pass}
					onChange={(e) =>
						setPass(e.target.value)
					}
					type="password"
					placeholder="********"
					id="password"
					name="password"
				/>
				<button
					type="submit"
					className="submitbtn"
				>
					Log In
				</button>
				<button
					className="link-btn"
					onClick={() =>
						navigate("/register")
					}
				>
					Don't have an account?
					Register here.
				</button>
			</form>
		</div>
	);
};
