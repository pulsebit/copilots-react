import React from 'react';
import Coaches from 'components/Coaches';

const Booking = () => {
	return (
		<React.Fragment>
			<Coaches title="Book a Coach" />
		</React.Fragment>
	);
}

export default React.memo(Booking);