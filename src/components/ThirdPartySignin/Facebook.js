import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FacebookProvider, Login as FacebookLogin } from 'react-facebook';

const FacebookApp = () => {

	return (
		<div className="clickPopUp">
			<FacebookProvider appId='245469196729146'>
		    <FacebookLogin scope="email"
		    onCompleted={() => console.log('click')}
		    onError={() => console.log('click')}
		    >
		    {({ loading, handleClick, error, data }) => (
		      <button onClick={handleClick} >
		        <FacebookIcon /><br />
		        <span>Facebook</span>
		      </button>     
		    )}
		    </FacebookLogin>
		  </FacebookProvider>
		</div>
	);
};

export default React.memo(FacebookApp);