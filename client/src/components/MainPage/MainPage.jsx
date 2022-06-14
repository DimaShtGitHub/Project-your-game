import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import 'animate.css';
import './MainPage.css';


export default function MainPage() {
	const user = useSelector((state)=> state.user);
	const dispatch = useDispatch();

  useEffect(() => {
  const userFromLocalStorage = localStorage.getItem('userId');
  if (userFromLocalStorage) {
  axios.get(`http://localhost:3001/auth/${userFromLocalStorage}`, { withCredentials: true }).then((answer) => {
		if (answer.status===200) {
			dispatch({ type: 'SET_USER', payload: answer.data});
		} 
	})
	.catch((err)=> {
		console.log(err);
		localStorage.getItem('userId', '');
	});
  }
  }, []); 

  return (
    <>
    <div className='mainpage'> 
      {!user.name ? 
        <>
        <h1 className='animate__animated animate__zoomInDown hello hello-1'> 
        <span className='first-letter-yellow'>Д</span>обро пожаловать в нашу игру</h1></>
      : <>
      <h1 className='animate__animated animate__zoomInDown hello hello-1'> 
      <span className='first-letter-yellow'>Д</span>обро пожаловать в нашу игру, {user.name}</h1></>}
      {!user.name ? 
        <>
      <h3 className='animate__animated animate__zoomInDown hello hello-2'>Для начала </h3>
        <div className='but-reg-auth'> 
          <Button style={{"cursor":"pointer"}} className='animate__animated animate__zoomInDown but-reg' variant="warning"><Nav.Link className='link-as' as={Link} to="auth/signup">Зарегистрируйтесь</Nav.Link></Button>
          <Button style={{"cursor":"pointer"}} className='animate__animated animate__zoomInDown' variant="secondary"><Nav.Link className='link-as' as={Link} to="auth/signin">Авторизуйтесь</Nav.Link></Button>
        </div></>
        :<>
        <div className='but-reg-auth'>
          <Button style={{"margin":"40px", "cursor":"pointer"}}className='animate__animated animate__zoomInDown but-reg' variant="warning"><Nav.Link className='link-as' as={Link} to="/game">Начать играть</Nav.Link></Button>
        </div></>}

    </div>
    </>
  )
}

