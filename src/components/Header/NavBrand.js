import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBrand = ({logo}) => (
	<Navbar.Brand href="#home">
    <img
      src={logo}
      height="50"
      className="d-inline-block align-top"
      alt="Copilots logo"
    />
  </Navbar.Brand>
  );

export default NavBrand;