import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const ActiveCard = ({ active, critical, tests }) => {
	return (
		<div className='col-lg-3 col-sm-6 mb-resp-3'>
			<div className='custom-card card-active'>
				<h6 className='result-title mb-0'>Active</h6>
				<p className='result-num mb-2 active-text'>
					{active ? (
						<CountUp
							end={active}
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp end={0} duration={3} separator=',' delay={0.75} />
					)}
				</p>
				<p className='today-cases'>
					{critical ? (
						<CountUp
							end={critical}
							prefix='Critical: '
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp
							end={0}
							prefix='Critical: '
							duration={3}
							separator=','
							delay={0.75}
						/>
					)}
				</p>
				<p className='today-cases mb-0'>
					{tests ? (
						<CountUp
							end={tests}
							prefix='Tests: '
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp
							end={0}
							prefix='Tests: '
							duration={3}
							separator=','
							delay={0.75}
						/>
					)}
				</p>
			</div>
		</div>
	);
};

ActiveCard.propTypes = {
	active: PropTypes.number,
	critical: PropTypes.number,
	tests: PropTypes.number
};

export default ActiveCard;
