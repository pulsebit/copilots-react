import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const IfNotRegister = () => {
	return (
		<React.Fragment>

		<NavLink to="/login" className="nav-link with-button">
			<Button
				color="primary"
				disableElevation
				variant="outlined"
			>Login</Button>
		</NavLink>

		<NavLink to="/register" className="nav-link with-button">
			<Button
				color="primary"
				disableElevation
				variant="contained"
			>Register</Button>
		</NavLink>

		</React.Fragment>
	)
}

export default IfNotRegister;