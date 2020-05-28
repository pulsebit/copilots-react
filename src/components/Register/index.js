import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ThirdPartySignin from 'components/ThirdPartySignin';
import {NavLink, useHistory, useRouteMatch} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Lists from './Lists';
import CheckoutForm from './CheckoutForm';

export default React.memo(() => {
	const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
	const [step] = React.useState([true, false]);
	const history = useHistory();
	const match = useRouteMatch();

	React.useEffect(() => {
		if (step[0] === true) {
			history.push(`${match.url}?step=1`);
		} else {
			history.push(`${match.url}?step=2`);
		}
	}, [history, match.url, step]);

	return (
		<Elements  stripe={stripePromise}>
			<section className="Login section">
				<Container>
					<Col md="12" className="m-auto">
						<Card className="border-0">
							<CardContent>
								<Row>
									<FormLeft />
									<FormRight>
										{!step ? (
											<CheckoutForm />
										) : (
											<React.Fragment>
												<RegisterForm />
												<ThirdParty />
											</React.Fragment>
										)}
									</FormRight>
								</Row>

							</CardContent>
						</Card>
					</Col>
				</Container>
			</section>
		</Elements>
	);
});




const FormRight = React.memo(({children}) => {
	return (
		<Col md="6">
			<CardHeader />
			{children}			
		</Col>
	);
});

const FormLeft = React.memo(() => {
	return (
		<Col md="6" className="mb-4">
			<h4 className="text-center">
				$497
			</h4>
			<p className="mb-3 text-center">
				PER MONTH
			</p>
			<Lists />
			<div className="divider-vertical"></div>
		</Col>
	);
});

const CardHeader = React.memo(() => (
	<React.Fragment>
		<h4 className="mb-3"
		>
			Account Informations
		</h4>
		<p className="mb-3"
		>
			You can sign using your CoPilots account to access our services
		</p>
	</React.Fragment>
));

const ThirdParty = React.memo(() => (
	<React.Fragment>
		<div className="small-message">
			<div></div>
			<p className="mb-0">or sign in with one click</p>
			<div></div>
		</div>
		<ThirdPartySignin />
		<h6 className="login-footer">
			By signing in or creating an account, you agree with our
			<NavLink to="/terms-condition"> Terms & conditions</NavLink> and 
			<NavLink to="/privacy"> Privacy statement.</NavLink>
		</h6>
	</React.Fragment>
));




