import axios from 'axios';
import {
	GET_COUNTRIES,
	GET_GLOBAL,
	GET_COUNTRY,
	FETCH_ERROR,
	SET_LOADING
} from './types';

export const getAllCountryNames = () => async dispatch => {
	try {
		const res = await axios.get(
			'https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true'
		);

		const countryArr = res.data.map(country => country.country).sort();

		dispatch({
			type: GET_COUNTRIES,
			payload: countryArr
		});
	} catch (err) {
		console.error(err.message);
		dispatch({
			type: FETCH_ERROR,
			payload: err.message
		});
	}
};

export const getGlobalResult = () => async dispatch => {
	try {
		const res = await axios.get(
			'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=true'
		);

		dispatch({
			type: GET_GLOBAL,
			payload: res.data
		});
	} catch (err) {
		console.error(err.message);
		dispatch({
			type: FETCH_ERROR,
			payload: err.message
		});
	}
};

export const getCountryResult = country => async dispatch => {
	dispatch({ type: SET_LOADING });

	country = country.toLowerCase();

	try {
		const res = await axios.get(
			`https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&twoDaysAgo=false&strict=true&allowNull=true`
		);

		dispatch({
			type: GET_COUNTRY,
			payload: res.data
		});
	} catch (err) {
		console.error(err.message);
		dispatch({
			type: FETCH_ERROR,
			payload: err.message
		});
	}
};
