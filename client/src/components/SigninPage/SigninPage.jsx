import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

export default function SigninPage() {
	const [inputsSignin, setInputsSignin] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const inputsSigninHandler = (e)=> {
		setInputsSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	const submitSigninHandler = (e) => {
		e.preventDefault();
		const user = {name: inputsSignin.name, password: inputsSignin.password};
		axios.post('http://localhost:3001/auth/signin',user)
			.then((user) => {
				dispatch({ type: 'SET_USER', payload: user.data});
				// localStorage.setItem('userId', newUser.data.id);
			})
		navigate('/');
	}

	return (
		<form id="signinForm" onSubmit={ submitSigninHandler }>
      <div className="registration-container">
        <h2>Вход на сайт</h2>
        <div className="form-group">
          <label htmlFor="username">Логин:</label>
          <input
						onChange={ inputsSigninHandler }
            id="username"
            className="form-control"
            name="name"
            placeholder="Введите логин"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
						onChange={ inputsSigninHandler}
            id="password"
            className="form-control"
            name="password"
            placeholder="Введите пароль"
            type="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </div>
    </form>
	)
}
