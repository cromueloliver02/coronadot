import React, { Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const DeathsCard = ({ deaths, todayDeaths }) => {
	return (
		<div className='col-lg-3 col-sm-6 mb-resp-3'>
			<div className='custom-card card-deaths'>
				<h6 className='result-title mb-0'>Deaths</h6>
				<p className='result-num mb-2 deaths-text'>
					{deaths ? (
						<CountUp
							end={deaths}
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp end={0} duration={3} separator=',' delay={0.75} />
					)}
				</p>
				<p className='today-cases'>
					{todayDeaths ? (
						<Fragment>
							<CountUp
								end={todayDeaths}
								prefix='Today: +'
								duration={3}
								separator=','
								delay={0.75}
							/>
						</Fragment>
					) : (
						<span className='font-weight-light text-muted'>
							No deaths today
						</span>
					)}
				</p>
				<p className='current-date mb-0'>
					<Moment format='MM/DD/YYYY'>{new Date()}</Moment>
				</p>
			</div>
		</div>
	);
};

DeathsCard.propTypes = {
	deaths: PropTypes.number,
	todayDeaths: PropTypes.number
};

export default DeathsCard;
