import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';


export default React.memo(({coaches, match}) => {

	return coaches && (
		<Row>
			{coaches.map((coach, index) => (
				<Column 
					key={index}
					ID={coach.ID} 
					image={coach.image}
					name={coach.display_name}
					facebook={coach.facebook}
					twitter={coach.twitter}
					linkedin={coach.linkedin}
					bio={coach.user_meta.description[0]}
					match={match}
				/>
			))}
		</Row>
		);
});

const Column = ({ID, image, name, facebook, twitter, linkedin, bio, match}) => {

	return (
		<Col xs="6" md="3">
			<Card className="mb-3">
				<CardContent className="text-center">
					<img
						className="mb-3" 
						width="150" 
						src={image}
						alt={name}
					/>
					<h5 className="mb-3">
						<b>{name}</b>
					</h5>
					<Row className="social-row mb-4">
						<Col xs="2" md="2">
							<a href={facebook || 'https://facebook.com'}>
								<FacebookIcon />
							</a>
						</Col>
						<Col xs="2" md="2">
							<a href={twitter || 'https://twitter.com'}>
								<TwitterIcon />
							</a>
						</Col>
						<Col xs="2" md="2">
							<a href={linkedin || 'https://linkedin.com'}>
								<LinkedInIcon />
							</a>
						</Col>
					</Row>
					<Link to={`${match}/${ID}`}>
						<Button 
							color="primary"
							variant="contained"
							disableElevation
							fullWidth
						>View Profile</Button>
					</Link>
				</CardContent>
			</Card>
		</Col>
	);
};