import React from 'react';

const NoData = ({message}) => {
	return (
		<div className="no-data mb-3">{message ? message : 'No Data Available.'}</div>
	);
}

export default NoData;