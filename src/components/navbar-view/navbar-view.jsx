import React from "react";
import './navbar-view.scss';

import { Navbar, Container, Nav, Navbar } from 'react-bootstrap';


export function NavbarView() {

    return (
        <Container fluid className="navbar-container">
            <Navbar>
                <Navbar.Brand>myFlix</Navbar.Brand>
                <Container className="nav-links">
                    <Nav.Link>Profile</Nav.Link>
                    <Nav.Link>Watchlist</Nav.Link>
                </Container>

            </Navbar>
        </Container>


    )
}