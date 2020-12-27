import React from 'react';
import PropTypes from 'prop-types';

const CountryOptionItem = ({ country }) => {
	return <option value={country.toLowerCase()}>{country}</option>;
};

CountryOptionItem.propTypes = {
	country: PropTypes.string.isRequired
};

export default CountryOptionItem;
