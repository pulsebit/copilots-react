import React from 'react';
import AppleLogin from 'react-apple-login';
import AppleIcon from '@material-ui/icons/Apple';

const AppleApp = () => {
	return (
		<div className="clickPopUp">
			<AppleLogin clientId=""
	      render = {renderProps => (
	        <button onClick={() => console.log(123)}>
	          <AppleIcon /><br />
	          <span>Apple</span>
	        </button>
	      )}
	      callback=""
	      redirectURI=""
	    />
		</div>
	);
};

export default React.memo(AppleApp);