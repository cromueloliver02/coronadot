import React, { Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const RecoveredCard = ({ recovered, todayRecovered }) => {
	return (
		<div className='col-lg-3 col-sm-6 mb-resp-3'>
			<div className='custom-card card-recovered'>
				<h6 className='result-title mb-0'>Recovered</h6>
				<p className='result-num mb-2 recovered-text'>
					{recovered ? (
						<CountUp
							end={recovered}
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp end={0} duration={3} separator=',' delay={0.75} />
					)}
				</p>
				<p className='today-cases'>
					{todayRecovered ? (
						<Fragment>
							<CountUp
								end={todayRecovered}
								prefix='Today: +'
								duration={3}
								separator=','
								delay={0.75}
							/>
						</Fragment>
					) : (
						<span className='font-weight-light text-muted'>
							No recoveries today
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

RecoveredCard.propTypes = {
	recovered: PropTypes.number,
	todayRecovered: PropTypes.number
};

export default RecoveredCard;
