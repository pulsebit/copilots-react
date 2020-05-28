import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = () =>{
	return (
		<React.Fragment>
			<NavLink to="/dashboard" className="nav-link">Home</NavLink>
	    <NavLink to="/coaches" className="nav-link">Coaches</NavLink>
	    <NavLink to="/bookings" className="nav-link">Bookings</NavLink>
	    <NavLink to="/resources" className="nav-link">Resources</NavLink>
	    <NavLink to="/contact" className="nav-link">Contact</NavLink>
	  </React.Fragment>
	)
}

export default NavItem;