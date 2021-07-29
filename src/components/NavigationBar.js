import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';

const NavigationBar = () => {
  let [selected, setSelected] = useState('1');

  return (
    <Navbar expand='lg' className='navbar'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            width='200'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            className='ml-auto'
            activeKey={selected}
            onSelect={(selectedItem) => setSelected(selectedItem)}
            as='ul'
          >
            <Nav.Item as='li'>
              <Nav.Link eventKey='1' className='nav-item' as={Link} to='/'>
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;