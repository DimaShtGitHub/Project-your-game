import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" style={{ position: "fixed", left: "0", bottom: "0", width: "100%", "borderTop": "10px solid #A9A9A9", "borderBottom": "18px solid #A9A9A9" }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container style={{ background: "#222529", width: "100%" }}>
					<Navbar.Brand className="text-header-brand" as={Link} to="/">Своя Игра</Navbar.Brand>
          <span style={{ color: "white", margin: "8px", cursor: "pointer" }}className="text-header"><span>&copy;</span> Скопировано правильно МиНиДиДи, 2022</span>
        </Container>
      </Navbar>
    </div>
  );
}
