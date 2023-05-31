import React, { useState } from "react";
import "./authorize.css";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
	const [email, setEmail] =
		useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	const navigate = useNavigate();

	return (
		<div className="auth-form-container">
			<form
				className="register-form"
				onSubmit={handleSubmit}
			>
				<h2 className="headerstyle">
					Register
				</h2>
				<label
					htmlFor="name"
					className="lblform"
				>
					Full name
				</label>
				<input
					className="inputform"
					value={name}
					name="name"
					onChange={(e) =>
						setName(e.target.value)
					}
					id="name"
					placeholder="full Name"
				/>
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
					Register
				</button>
				<button
					className="link-btn"
					onClick={() =>
						navigate("/login")
					}
				>
					Already have an account? Login
					here.
				</button>
			</form>
		</div>
	);
};
