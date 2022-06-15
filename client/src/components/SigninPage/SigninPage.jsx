import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './SigninPage.css'
import { Button } from 'react-bootstrap'

export default function SigninPage() {
	const [inputsSignin, setInputsSignin] = useState({});
  const [err, setErr] = useState({})
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const inputsSigninHandler = (e)=> {
		setInputsSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	const submitSigninHandler = (e) => {
		e.preventDefault();
		const user = {name: inputsSignin.name, password: inputsSignin.password};
		axios.post('http://localhost:3001/auth/signin',user, { withCredentials: true })
			.then((user) => {
				dispatch({ type: 'SET_USER', payload: user.data});
				localStorage.setItem('userId', user.data.id);
				navigate('/');
			})
      .catch((res) => {
        if (res.response.status === 401) {
          setErr((prev) => (res.response.data))
        } else if (res.response.status === 500) {
          setErr((prev) => (res.response.data))
        }
      })
	}
		

	return (
		<form id="signinForm" className='sign-in-form' onSubmit={ submitSigninHandler }>
      <div className="registration-container">
        <h2>Вход на сайт</h2>
        <div className="form-group login-email-pass">
          <label htmlFor="username">Логин:</label>
          <input
						onChange={ inputsSigninHandler }
            id="username"
            className="form-control login-email-pass"
            name="name"
            placeholder="Введите логин"
            type="text"
            required
          />
        </div>
        <div className="form-group login-email-pass">
          <label htmlFor="password">Пароль:</label>
          <input
						onChange={ inputsSigninHandler}
            id="password"
            className="form-control login-email-pass"
            name="password"
            placeholder="Введите пароль"
            type="password"
            required
          />
        </div>
        <div className='errMessages'>{err.message}</div>
        <div className='but-login'>
        <Button type="submit" variant="secondary" className="btn btn-primary login-email-pass-but">
          Войти
        </Button>
        </div>
      </div>
    </form>
	)
}
