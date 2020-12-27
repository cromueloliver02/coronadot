import React from 'react';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CountryInfo = ({ corona: { country, loading } }) => {
	if (country === null || loading) {
		return <Spinner />;
	}

	return (
		country.countryInfo !== undefined && (
			<section className='countryInfo py-3'>
				<div className='container'>
					<div className='d-flex justify-content-center'>
						<div className='d-flex align-items-center'>
							<span className='country-name mr-3'>
								{country.country}
							</span>
							<img
								className='country-flag'
								src={country.countryInfo.flag}
							/>
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
