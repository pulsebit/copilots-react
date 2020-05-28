import React from 'react';
import {NavLink} from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import defaultProfilePicture from 'images/profile-default.png';
import {AuthDataContext} from 'context/authContext';
import DropDownContent from './DropdownContent';

const IfRegister = ({notifCount}) => {
	const {authData} = React.useContext(AuthDataContext);

	return (
		<React.Fragment>
			<NavLink 
				to="/notifications" 
				className="nav-link" 
				activeClassName="active-notification"
			>
		    <Badge 
		    	color="primary"
		    	badgeContent={notifCount} 
		    >
		      <NotificationsIcon />
		    </Badge>    
		  </NavLink>
		  <div className="profile">
		    <img 
		    	src={authData ? authData.picture : defaultProfilePicture} 
		    	alt="Account Profile" 
		    />    
		    <DropDownContent
		    	userID={authData ? authData.sub : ''} 
		    	authData={authData} 
		    />
		  </div>
	  </React.Fragment>
	)
}

export default IfRegister;