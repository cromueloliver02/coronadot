import React, { Fragment } from 'react';
import Moment from 'react-moment';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const InfectedCard = ({ cases, todayCases }) => {
	return (
		<div className='col-lg-3 col-sm-6 mb-resp-3'>
			<div className='custom-card card-infected'>
				<h6 className='result-title mb-0'>Infected</h6>
				<p className='result-num mb-2 infected-text'>
					{cases ? (
						<CountUp
							end={cases}
							duration={3}
							separator=','
							delay={0.75}
						/>
					) : (
						<CountUp end={0} duration={3} separator=',' delay={0.75} />
					)}
				</p>
				<p className='today-cases'>
					{todayCases ? (
						<Fragment>
							<CountUp
								end={todayCases}
								prefix='Today: +'
								duration={3}
								separator=','
								delay={0.75}
							/>
						</Fragment>
					) : (
						<span className='font-weight-light text-muted'>
							No cases today
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

InfectedCard.propTypes = {
	cases: PropTypes.number,
	todayCases: PropTypes.number
};

export default InfectedCard;
