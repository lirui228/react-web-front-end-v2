import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('home');

  const handleNavItemClick = (event) => {
    setSelectedNavItem(event.target.id);
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/">
        GaLaxy
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link
          as={Link}
          to="/"
          id="home"
          className={selectedNavItem === 'home' ? 'active' : ''}
          onClick={handleNavItemClick}
        >
          主页
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/Galclass"
          id="galaxy"
          className={selectedNavItem === 'galaxy' ? 'active' : ''}
          onClick={handleNavItemClick}
        >
          星系
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/services"
          id="forum"
          className={selectedNavItem === 'forum' ? 'active' : ''}
          onClick={handleNavItemClick}
        >
          论坛
        </Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <Button variant="outline-light" size="sm" className="me-2" href="login">
          登录
        </Button>
        <Button variant="outline-light" size="sm" href="register">
          注册
        </Button>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;

