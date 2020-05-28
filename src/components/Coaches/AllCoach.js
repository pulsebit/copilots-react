import React, {useState, useEffect} from 'react';
import axios from 'axios';
import YourCoachLists from './YourCoachLists';
import NoData from 'components/NoData';
import Loading from 'components/Loading';
import CoachSingle from './CoachSingle';
import {Route} from 'react-router-dom';


const AllCoach = ({match, title}) => {
	const [coaches, setCoaches] = useState(null);
	const [noDataText, setNoDataText] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios.get(`${process.env.REACT_APP_API}/api/coaches/`)
			.then(res => {
				setLoading(false);
				if (res.data.length === 0) {
					setNoDataText('No Data Available.');
				} else {
					setCoaches(res.data);
				}
			})
			.catch(err => {
				setLoading(false);
				setNoDataText(err.message);
			})
	}, []);

	useEffect(() => {
		return () => {
			setCoaches(null);	
		}
	}, []);

	return (
		<React.Fragment>
			<Route path={`${match}/:coachId`}>
				<CoachSingle match={match} />
			</Route>
			 {loading ? <Loading /> : (
				<React.Fragment>
					{noDataText ? <NoData message={noDataText} /> : (
						<React.Fragment>
							<h4 className="mb-3"><b>{title || 'Coaches'}</b></h4>
							<YourCoachLists match={match} coaches={coaches} />
						</React.Fragment>
					)}
				</React.Fragment>		
			)}
		</React.Fragment>
	);
}

export default React.memo(AllCoach);

