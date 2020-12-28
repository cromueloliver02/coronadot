import React, { Fragment } from 'react';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import global from '../../img/global.png';
import PropTypes from 'prop-types';

const CountryInfo = ({ corona: { country, loading } }) => {
	if (country === null || loading) {
		return <Spinner />;
	}

	return (
		country !== null &&
		!loading && (
			<section className='countryInfo py-3	'>
				<div className='container'>
					<div className='d-flex justify-content-center'>
						<div className='d-flex align-items-center'>
							{country.countryInfo !== undefined ? (
								<Fragment>
									<span className='country-name mr-3'>
										{country.country}
									</span>
									<img
										className='country-flag'
										src={country.countryInfo.flag}
										alt={country.country}
									/>
								</Fragment>
							) : (
								<Fragment>
									<span className='country-name mr-3'>Global</span>
									<img
										src={global}
										alt='Global'
										style={{ width: '70px' }}
									/>
								</Fragment>
							)}
						</div>
					</div>
				</div>
			</section>
		)
	);
};

CountryInfo.propTypes = {
	corona: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	corona: state.corona
});

export default connect(mapStateToProps)(CountryInfo);
