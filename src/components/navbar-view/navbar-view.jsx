import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import './navbar-view.scss';


export function NavbarView({ user }) {

    const onLoggedOut = () => {
        localStorage.clear();
        window.open("/", "_self");
    }

    const isAuth = () => {
        if (typeof window == "undefined") {
            return false;
        }
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
        } else {
            return false;
        }
    };

    return (
        <Navbar fluid >
            <Container className="navbar-container">
                <Navbar.Brand className="navbar-title" as={Link} to={"/"} >myFlix</Navbar.Brand>
                {isAuth() && (
                    <Nav>
                        <Nav.Link as={Link} to={"/users/user._id"}>Profile</Nav.Link>
                        <Button className="navbar-button" onClick={() => { onLoggedOut() }}>Logout</Button>
                    </Nav>
                )}
            </Container>
        </Navbar >
    )
}