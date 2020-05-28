import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import NoData from 'components/NoData';
import Loading from 'components/Loading';

const useStyles = makeStyles({
  media: {
    height: 270,
  },
});

export default React.memo(({match}) => {
	const {coachId} = useParams();
	const [coaches, setCoaches] = useState(null);
	const [noDataText, setNoDataText] = useState(null);
	const [loading, setLoading] = useState(true);

	const getCoach = React.useCallback(() => {
		setLoading(true);
		axios.get(`${process.env.REACT_APP_API}/api/coach/${coachId}`)
			.then(res => {
				setLoading(false);
				res.data.length === 0 ? setNoDataText('No Data Available.') : setCoaches(res.data);
			})
			.catch(err => {
				setLoading(false);
				setNoDataText(err.message + '.');
			})
	}, [setLoading, setNoDataText, coachId]);

	useEffect(() => {
		getCoach();
	}, [getCoach]);

	useEffect(() => {
		return () => {
			setCoaches(null);
		}
	}, []);

	return loading ? <Loading /> : (
		<React.Fragment>
			{noDataText ? <NoData message={noDataText} /> : (
				<React.Fragment>
					{coaches && coaches.map((coach, index) => (
						<Single 
							key={index}
							ID={coach.ID} 
							image={coach.image}
							name={coach.display_name}
							facebook={coach.facebook}
							twitter={coach.twitter}
							linkedin={coach.linkedin}
							bio={coach.user_meta.description[0]}
							calendly={coach.calendly_link}
						/>
					))}
				</React.Fragment>
			)}
		</React.Fragment>		
	);
});


const Single = ({ID, image, name, facebook, twitter, linkedin, bio, calendly}) => {
	const classes = useStyles()
	return (
		<React.Fragment>
			<Card className="mb-5 p-2">
				<Row>
					<Col md="3">
							<CardMedia 
								image={image}
        				title={name}
        				className={classes.media}
							/>
					</Col>
					<Col md="6">
						<div className="p-3">
							<h4 className="mb-3"><b>{name}</b></h4>
							<p className="mb-3">
							{bio || `
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. `}</p>
							<Row className="mb-3">
								<Col xs="1" md="1">
									<a href={facebook || 'https://facebook.com'}>
										<FacebookIcon />
									</a>
								</Col>
								<Col xs="1" md="1">
									<a href={twitter || 'https://twitter.com'}>
										<TwitterIcon />
									</a>
								</Col>
								<Col xs="1" md="1">
									<a href={linkedin || 'https://linkedin.com'}>
										<LinkedInIcon />
									</a>
								</Col>
							</Row>
							<a href={calendly}>
								<Button
									color="primary"
									variant="contained"
									disableElevation
									disabled={!calendly}
								>Book {name}</Button>
							</a>
						</div>
					</Col>
				</Row>
			</Card>
		</React.Fragment>
	);
}
