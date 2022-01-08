import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <ReactBootStrap.Container fluid className='p-0'>
            <ReactBootStrap.Navbar expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <ReactBootStrap.NavbarBrand>
                        <img 
                            alt="SkateYard Shop"
                            src={logo} 
                            width="50px" 
                            height="50px" 
                            className="d-inline-block align-top"/>
                    </ReactBootStrap.NavbarBrand>
                </LinkContainer>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <LinkContainer to="/">
                            <ReactBootStrap.Nav.Link>Home</ReactBootStrap.Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/producten">
                            <ReactBootStrap.Nav.Link>producten</ReactBootStrap.Nav.Link>
                        </LinkContainer>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="justify-content-end">
                        <LinkContainer to="/winkelmandje">
                            <ReactBootStrap.Nav.Link><FontAwesomeIcon icon={ faShoppingCart } size='2x'/></ReactBootStrap.Nav.Link>
                        </LinkContainer>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </ReactBootStrap.Container>
    );
}

export default Nav;
