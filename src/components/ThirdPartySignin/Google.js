import React , {useCallback} from 'react';
import GoogleLogin from 'react-google-login';
import {FaGoogle} from 'react-icons/fa';
import {AuthContext, AuthDataContext} from 'context/authContext';

const GoogleApp = () => {
  const {setIsAuth} = React.useContext(AuthContext);
  const {setAuthData} = React.useContext(AuthDataContext);

	const onSuccess = useCallback((res) => {
    const idToken = res.getAuthResponse().id_token;
    localStorage.setItem('google_idToken', idToken);
    setIsAuth(true);
    fetch(`${process.env.REACT_APP_GOOGLE_APIS}${idToken}`)
      .then(res => res.json())
      .then(data => {
        if (data.error_description) {
          setIsAuth(false);
          setAuthData(null);
        } else {
          setAuthData(data);
          setIsAuth(true);
        }
      });
  }, [setIsAuth, setAuthData]);

  const onFailure = useCallback((res) => {

  }, []);


	return (
		<div className="clickPopUp">
			<GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        render={renderProps => (
        <button
        	onClick={renderProps.onClick} 
        	disabled={renderProps.disabled}
        >
          <FaGoogle /><br />
          <span>Google</span>
        </button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
    	/>
		</div>
	);
};

export default React.memo(GoogleApp);