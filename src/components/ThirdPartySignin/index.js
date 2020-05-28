import React from 'react';
import Facebook from './Facebook';
import Google from './Google';
import Apple from './Apple';

export default React.memo(() => { 
	return (
		<div className="third-party-signin mb-3">
			<Facebook />
			<Google />
			<Apple />		
		</div>
	);
});