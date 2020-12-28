import {
	GET_COUNTRIES,
	GET_GLOBAL,
	GET_COUNTRY,
	SET_LOADING,
	FETCH_ERROR
} from '../_actions/types';

const initialState = {
	country: null,
	countries: [],
	error: null,
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: payload,
				loading: false
			};
		case GET_GLOBAL:
		case GET_COUNTRY:
			return {
				...state,
				country: payload,
				loading: false
			};
		case FETCH_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				country: null,
				loading: true
			};
		default:
			return state;
	}
};
