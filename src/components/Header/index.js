import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from 'images/logo.png';
import NavBrand from './NavBrand';
import NavItem from './NavItem';
import IfNotRegister from './IfNotRegister';
import IfRegister from './IfRegister';
import {AuthContext} from 'context/authContext';


const Header = () =>  {
  const {isAuth} = React.useContext(AuthContext);

  return (
    <header className="Header">
      <Navbar bg="white" expand="lg"
        collapseOnSelect={true}
      >
        <Container>
          <NavBrand logo={logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavItem />
              {isAuth ? <IfRegister notifCount='0' /> : <IfNotRegister />}                   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;