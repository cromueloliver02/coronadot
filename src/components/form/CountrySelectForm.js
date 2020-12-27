import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CountryOptionItem from './CountryOptionItem';
import {
	getAllCountryNames,
	getGlobalResult,
	getCountryResult
} from '../../_actions/coronaActions';
import {
	getGlobalHistory,
	getCountryHistory
} from '../../_actions/chartActions';
import PropTypes from 'prop-types';

const CountrySelectForm = ({
	countries,
	getAllCountryNames,
	getGlobalResult,
	getCountryResult,
	getGlobalHistory,
	getCountryHistory
}) => {
	const [country, setCountry] = useState('global');

	useEffect(() => {
		getAllCountryNames();

		if (country === 'global') {
			getGlobalResult();
			getGlobalHistory();
		} else {
			getCountryResult(country);
			getCountryHistory(country);
		}

		// eslint-disable-next-line
	}, [country]);

	const onChange = e => {
		setCountry(e.target.value);
	};

	return (
		// <section className='country-select py-4'>
		// 	<div className='container'>
		// 		<div className='row'>
		// 			<div className='col-md-6 offset-md-3'>
		<select
			className='custom-select'
			name='countries'
			value={country}
			onChange={onChange}
			// defaultValue='global'
		>
			<option value='global'>Global</option>
			{countries.map((country, idx) => (
				<CountryOptionItem key={idx} country={country} />
			))}
		</select>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};

CountrySelectForm.propTypes = {
	getAllCountryNames: PropTypes.func.isRequired,
	getGlobalResult: PropTypes.func.isRequired,
	getCountryResult: PropTypes.func.isRequired,
	getGlobalHistory: PropTypes.func.isRequired,
	getCountryHistory: PropTypes.func.isRequired,
	countries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	countries: state.corona.countries
});

export default connect(mapStateToProps, {
	getAllCountryNames,
	getGlobalResult,
	getCountryResult,
	getGlobalHistory,
	getCountryHistory
})(CountrySelectForm);
