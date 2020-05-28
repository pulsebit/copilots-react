import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ThirdPartySignin from 'components/ThirdPartySignin';
import {NavLink} from 'react-router-dom';
import {AuthContext} from 'context/authContext';
import {useHistory} from 'react-router-dom';


const Login = ({location}) => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const handleFormSubmit = React.useCallback((e) => {
		e.preventDefault();
		alert(`${username} ${password}`);
	}, [username, password]);

	return (
		<section className="Login section">
			<Container>
				<Col md="6" className="m-auto">
					<Card className="border-0">
						<CardContent>
							<Typography 
								variant="h4" 
								component="h4"
								className="mb-3"
							>
								Sign In
							</Typography>
							<Typography className="mb-3">
								You can sign using your CoPilots account to access our services
							</Typography>

							<form onSubmit={handleFormSubmit}>
								<div className="form-group">
									<TextField 
										type="text"
										label="Username / Email" 
										variant="outlined" 
										color="primary"
										fullWidth
										size="medium"
										required
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<TextField 
										type="password"
										label="Password" 
										variant="outlined" 
										color="primary"
										fullWidth
										size="medium"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<Button
										color="primary"
										variant="contained"
										fullWidth
										size="large"
										type="submit"
										disableElevation
									>
									  Sign in
									</Button>
								</div>
							</form>
							<div className="small-message">
								<div></div>
								<p className="mb-0">or sign in with one click</p>
								<div></div>
							</div>
							<ThirdPartySignin />
							<h6 className="login-footer">
								Not a CoPilots member yet? 
								<NavLink to="/register">Join Now.</NavLink>
							</h6>					
						</CardContent>
					</Card>
				</Col>
			</Container>
		</section>
	);
}

export default React.memo(Login);