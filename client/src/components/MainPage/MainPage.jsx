import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import 'animate.css';
import './MainPage.css';

export default function MainPage() {
  return (
    <>
    <div className='mainpage'>
      <h1 className='animate__animated animate__zoomInDown hello hello-1'> 
      <span className='first-letter-yellow'>Д</span>обро пожаловать в нашу игру</h1>
      <h3 className='animate__animated animate__zoomInDown hello hello-2'>Для начала </h3>
        <div className='but-reg-auth'> 
          <Button className='animate__animated animate__zoomInDown but-reg' variant="warning"><Nav.Link className='link-as' as={Link} to="auth/signup">Зарегистрируйтесь</Nav.Link></Button>
          <Button className='animate__animated animate__zoomInDown' variant="secondary"><Nav.Link className='link-as' as={Link} to="auth/signin">Авторизуйтесь</Nav.Link></Button>
        </div>  
    </div>
    </>
  )
}

