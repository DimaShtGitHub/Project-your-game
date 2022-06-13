import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Header() {
	const user = useSelector((state)=> state.user);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{"background":"#222529", "width":"100%"}}>
        <Navbar.Brand href="/">Своя Игра</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Главная</Nav.Link>
            <Nav.Link href="#pricing">Игра</Nav.Link>
          </Nav>
          <Nav>
						{!user.name ? <>
							<Nav.Link as={Link} to="auth/signin">Авторизация</Nav.Link>
							<Nav.Link as={Link} to="auth/signup">Регистрация</Nav.Link></>
						: <><Nav.Link as={Link} to="auth/logout">Выйти</Nav.Link>
							<span style={{"color":"white", "margin":"8px"}}>Привет, {user.name}</span></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
