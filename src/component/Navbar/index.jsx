import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import '../Navbar/navbar.css'
import Logo from '../../asset/images/navbar-travelark.png'



function header() {
  return (
    <Navbar expand="lg pt-3">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link href="/" className='px-3'>Discovery</Nav.Link>
            <Nav.Link href="/" className='px-3'>Destination</Nav.Link>
            <Nav.Link href="/" className='px-3'>Package</Nav.Link>
            <Nav.Link href="/" className='px-3'>About Us</Nav.Link>
          </Nav>
          <Link >
            <button className='button mx-2'>Register</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;