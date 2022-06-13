import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

export default function SignupPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputSignUp, setInputSignUp] = useState({});

	const inputSignUpHandler = (e) => {
		console.log(inputSignUp);
		setInputSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const submitSignUpHandler = (e) => {
		e.preventDefault();
		console.log(222222);
		const newUser = {name: inputSignUp.name, email: inputSignUp.email, password: inputSignUp.password}
		axios.post('http://localhost:3001/auth/signup', newUser)
		.then(newUser=> dispatch({type: 'SET_USE', payload: newUser.data}));
		setInputSignUp({});
		navigate("/game");
	}


	return (
		<>
		<form  onSubmit={submitSignUpHandler} id="signupForm" > 
			<div className="registration-container">
				<h2>Регистрация</h2>
				<div className="form-group">
					<label htmlFor="username">Логин:</label>
					<input 	
						onChange={ inputSignUpHandler }
						id="username"
						className="form-control"
						name="name"
						type="text"
						placeholder="Введите логин"
						required
						pattern="[A-Za-z]\w+"
						minLength="4"
						title="Латинские буквы, цифры и _"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						onChange={ inputSignUpHandler }
						id="email"
						className="form-control"
						name="email"
						type="text"
						placeholder="Введите email"
						pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Пароль:</label>
					<input 
						onChange={ inputSignUpHandler }
						id="password"
						className="form-control"
						name="password"
						type="password"
						placeholder="Введите пароль"
						required
						minLength="6"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Зарегистрироваться
				</button>
			</div>
		</form>
		<div>
			Если вы уже зарегистрированы, то{" "}
			<Link to={"auth/signin"}>авторизуйтесь</Link>
		</div>
	</>
	)
}
