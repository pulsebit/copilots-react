import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
	return (
		<div className="p-5 text-center">
			<CircularProgress 
				size={24}
				color="primary"
			/>
		</div>
	);
}

export default Loading;