import {
	GET_GLOBAL_HISTORY,
	GET_COUNTRY_HISTORY,
	SET_BAR_CHART,
	CHART_ERROR,
	SET_CHART_LOADING
} from '../_actions/types';

const initialState = {
	infected: null,
	recovered: null,
	deaths: null,
	barChart: null,
	error: null,
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_GLOBAL_HISTORY:
		case GET_COUNTRY_HISTORY:
			return {
				...state,
				infected: payload.infected,
				recovered: payload.recovered,
				deaths: payload.deaths,
				loading: false
			};
		case SET_BAR_CHART:
			return {
				...state,
				barChart: payload,
				loading: false
			};
		case CHART_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		case SET_CHART_LOADING:
			return {
				...state,
				infected: null,
				recovered: null,
				deaths: null,
				barChart: null,
				loading: true
			};
		default:
			return state;
	}
};
