import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthContext, AuthDataContext} from 'context/authContext';
import MainWrapper from 'components/Wrapper/MainWrapper';
import Login from 'components/Login';
import Register from 'components/Register';
import Booking from 'components/Booking';
import Coaches from 'components/Coaches';
import Resources from 'components/Resources';
import Dashboard from 'components/Dashboard';
import Notifications from 'components/Notifications';

//test
const googleIdToken = localStorage.getItem('google_idToken');

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [authData, setAuthData] = React.useState(null);

  React.useEffect(() => {
    if (googleIdToken) {
      fetch(`${process.env.REACT_APP_GOOGLE_APIS}${googleIdToken}`)
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
    }
  },[]);


  const authValue = React.useMemo(() => ({isAuth, setIsAuth}), [isAuth, setIsAuth]);
  const authDataValue = React.useMemo(() => ({authData, setAuthData}), [authData, setAuthData]);

  return (
    <AuthContext.Provider value={authValue}>
      <AuthDataContext.Provider value={authDataValue}>
        <MainWrapper>
          <Switch>
            <Route path="/notifications" component={Notifications} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bookings" component={Booking} />
            <Route path="/coaches" component={Coaches} />
            <Route path="/resources" component={Resources} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </MainWrapper>
      </AuthDataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
