import React from 'react';
import './TopBar.sass';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';

import longlive from '../../images/topbar/logo.jpg';

const TopBar = () => {

    const style = {
        color: 'white'
    }

    return (
        <Navbar className="nav-container" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <Image className="logo" src={longlive}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={style} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link style={style} as={Link} to="/news">News</Nav.Link>
                    <Nav.Link style={style} as={Link} to="/tests">Quizzes</Nav.Link>
                    <Nav.Link style={style} as={Link} to="/bio">Bio</Nav.Link>   
                </Nav>
                <Nav>
                    <a style={style} href="https://taylorswift.com" target="_blank" rel="noreferrer noopener">
                        Merch
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopBar;