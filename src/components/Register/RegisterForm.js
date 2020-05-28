import React, {useCallback, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const RegisterForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [error,  setError ] = useState(false);
	const [errorM,  setErrorM ] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleFormSubmit = useCallback((e) => {
		e.preventDefault();
		const payload = {
			firstName, 
			lastName, 
			mobileNumber, 
			email, 
			username, 
			password,
			password2
		};

		if (firstName === '' ||
			  lastName === '' ||
			  mobileNumber === '' ||
			  email === '' ||
			  username === '' ||
			  password === '') {
			setError(true);
			setErrorM('Empty fields');
		} else {
			setLoading(true);
			axios.post(`${process.env.REACT_APP_API}/api/user/register/`, payload)
				.then(res => {
					setLoading(false);
					console.log(res);
				})
				.catch(err => {
					setLoading(false);
					console.log(err.message)
				});
		}

	}, [
		firstName,
		lastName,
		mobileNumber,
		email,
		username,
		password,
		password2
	]);

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="form-group">
				<TextField
					required
					type="text"  
					label="First Name" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setFirstName(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="text" 
					label="Last Name" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setLastName(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="tel" 
					label="Mobile Number" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setMobileNumber(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="email" 
					label="Email" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="text" 
					label="Username" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setUsername(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="password" 
					label="Password" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<TextField
					required 
					type="password" 
					label="Confirm Password" 
					variant="outlined" 
					color="primary"
					fullWidth
					size="medium"
					error={error}
					helperText={errorM}
					onChange={e => setPassword2(e.target.value)}
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
					className="register-btn"
					disabled={loading}
				>
				  Next
				</Button>
			</div>
		</form>
	);
}

export default RegisterForm;