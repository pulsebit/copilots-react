import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useGoogleLogout } from 'react-google-login';
import {AuthContext} from 'context/authContext';


const DropdownContent = ({userID}) => {

	const {setIsAuth} = React.useContext(AuthContext);

	const {signOut} = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENTID, 
    onLogoutSuccess: () => {
    	localStorage.removeItem('google_idToken');
    	setIsAuth(false);
    }
  });

  const logout = React.useCallback(() => {
  	signOut();
  }, [signOut]);

	return (
		<NavDropdown 
    	title="" 
    	id="collasible-nav-dropdown"
    >
    	<NavLink 
    		to={`/me/${userID}/info`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>My Info</NavLink>

    	<NavLink 
    		to={`/me/${userID}/billing-method`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>Billing Method</NavLink>

    	<NavLink 
    		to={`/me/${userID}/password`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>Password</NavLink>

    	<NavLink 
    		to={`/me/${userID}/subscription`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>Subscription</NavLink>

    	<NavLink 
    		to={`/me/${userID}/notification`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>Notification</NavLink>

    	<NavLink 
    		to={`/me/${userID}/recording`} 
    		className="dropdown-item" 
    		activeClassName="active-dropdown"
    	>Recording</NavLink>

      <NavDropdown.Divider />
      	<Button
          type="button"
      		onClick={logout}
      		fullWidth
      		color="primary"
      	>Logout</Button>
    </NavDropdown>
	);
}

export default DropdownContent;