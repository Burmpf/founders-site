import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./navbar.css";


class NavbarComponent extends Component {
    render() {
        return (
            <Navbar class="nav"  bg="dark" variant='dark' expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src="/images/foundasdaodesign2.png"
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                        alt="Founders"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <NavDropdown title="Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://exchange.art/the-founders/nfts">ExchangeArt</NavDropdown.Item>
                            <NavDropdown.Item href="https://magiceden.io/marketplace/founders">Magic Eden</NavDropdown.Item>
                            <NavDropdown.Item href="https://discord.gg/founders">Discord</NavDropdown.Item>
                            <NavDropdown.Item href="https://twitter.com/FoundersSOL">Twitter</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;
