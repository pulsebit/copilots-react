import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from 'context/authContext';


const PrivateRoute = ({component: Component, ...rest}) => {
	const {isAuth} = React.useContext(AuthContext);
	return isAuth ? (
		<Route 
			{...rest}
			render={props => <Component {...props} />} />
	) : (
		<Redirect to="/login" />
	);
}

export default PrivateRoute;