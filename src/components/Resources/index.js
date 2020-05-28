import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';

const Resources = () => {
	return (
		<section className="Login section">
			<Container>
			<h3 className="mb-3"><b>Resources</b></h3>
			<Row>
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
			</Row>

			</Container>
		</section>
	);
}

const Column = () => (
	<Col md="3" className="mb-4">
		<Link to="/resources">
			<Card className="p5">
				<CardContent>
					<h4 className="text-center"><b>Product</b></h4>
				</CardContent>
			</Card>
		</Link>
	</Col>
);

export default Resources;