import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './Header.css';
import axios from "axios";

export default function Header() {
	const user = useSelector((state)=> state.user);
  const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		axios.post('http://localhost:3001/auth/logout', {credentials: false})
			.then((answerFromServer) => console.log(answerFromServer));
		dispatch({type: 'SET_USER', payload: {}});
		localStorage.setItem('userId', '');
		navigate('/');
	}

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{"background":"#222529", "width":"100%"}}>
        <Navbar.Brand className="text-header-brand" as={Link} to="/">Своя Игра</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-header" as={Link} to="/">Главная</Nav.Link>
            <Nav.Link className="text-header" as={Link} to="/game">Игра</Nav.Link>
          </Nav>
          <Nav>
						{!user.name ? 
              <>
							<Nav.Link className="text-header" as={Link} to="auth/signin">Авторизация</Nav.Link>
							<Nav.Link className="text-header" as={Link} to="auth/signup">Регистрация</Nav.Link></>
						: <>
              <span onClick={()=>logoutHandler()} style={{"color":"white", "margin":"8px", "cursor":"pointer"}} className="text-header" >Выйти</span>
							<span className="text-header" style={{"color":"white", "margin":"8px"}}>Привет, {user.name}</span></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
