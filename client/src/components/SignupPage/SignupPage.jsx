import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './SignupPage.css'
import { Button } from 'react-bootstrap';

export default function SignupPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputSignUp, setInputSignUp] = useState({});
	const [err, setErr] = useState({})

	const inputSignUpHandler = (e) => {
		setInputSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const submitSignUpHandler = (e) => {
		e.preventDefault();
		const newUser = { name: inputSignUp.name, email: inputSignUp.email, password: inputSignUp.password }
		axios.post('http://localhost:3001/auth/signup', newUser, { withCredentials: true })
			.then(newUser => {
				dispatch({ type: 'SET_USER', payload: newUser.data });
				localStorage.setItem('userId', newUser.data.id);
				setInputSignUp({});
				navigate("/game");
			})
			.catch((res) => {
				if (res.response.status === 401) {
					setErr((prev) => (res.response.data))
				} else if (res.response.status === 500) {
					setErr((prev) => (res.response.data))
				}
			})
	};


	return (
		<>
			<form onSubmit={submitSignUpHandler} id="signupForm" >
				<div className="registration-container">
					<h2>Регистрация</h2>
					<div className="form-group login-email-pass">
						<label htmlFor="username">Логин:</label>
						<input
							onChange={inputSignUpHandler}
							id="username"
							className="form-control login-email-pass"
							name="name"
							type="text"
							placeholder="Введите логин"
							required
							pattern="[A-Za-z]\w+"
							minLength="4"
							title="Латинские буквы, цифры и _"
						/>
					</div>
					<div className="form-group login-email-pass">
						<label htmlFor="email">Email:</label>
						<input
							onChange={inputSignUpHandler}
							id="email"
							className="form-control login-email-pass"
							name="email"
							type="text"
							placeholder="Введите email"
							pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
							required
						/>
					</div>
					<div className="form-group login-email-pass input-center-text">
						<label htmlFor="password">Пароль:</label>
						<input
							onChange={inputSignUpHandler}
							id="password"
							className="form-control login-email-pass"
							name="password"
							type="password"
							placeholder="Введите пароль"
							required
							minLength="6"
						/>
					</div>
					<div className="errMessages">{err.message}</div>
					<div className='sign-up-but'>
						<Button type="submit" variant="warning" className="btn btn-primary singn-up-btn ">
							Зарегистрироваться
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}
