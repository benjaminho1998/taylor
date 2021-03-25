import React from 'react';
import './TopBar.sass';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FiSearch } from 'react-icons/fi';

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Enchanted</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Bio</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <InputGroup className="top-input">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><FiSearch /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Search lyrics"
                        aria-label="Search lyrics"
                        className="top-search"
                    />
                </InputGroup>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;