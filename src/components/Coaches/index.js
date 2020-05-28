import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import AllCoach from './AllCoach';
import Container from 'react-bootstrap/Container';


const Coaches = ({title}) => {
	const match = useRouteMatch();

	return (
		<section className="section-padding Coach">
			<Container className="mb-5">
				<AllCoach title={title} match={match.url} />
			</Container>
		</section>
	);
}

export default React.memo(Coaches);