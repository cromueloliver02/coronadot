import axios from 'axios';
import {
	GET_GLOBAL_HISTORY,
	GET_COUNTRY_HISTORY,
	SET_CHART_LOADING,
	CHART_ERROR
} from '../_actions/types';

export const getGlobalHistory = () => async dispatch => {
	dispatch({ type: SET_CHART_LOADING });

	try {
		const res = await axios.get(
			'https://disease.sh/v3/covid-19/historical/all?lastdays=60'
		);

		const labels = Object.keys(res.data.cases);
		const infectedNum = Object.values(res.data.cases);
		const recoveredNum = Object.values(res.data.recovered);
		const deathsNum = Object.values(res.data.deaths);

		const chart = {
			infected: {
				labels,
				datasets: [
					{
						label: 'Infected',
						data: infectedNum,
						borderColor: ['rgba(199, 0, 57, 0.5)'],
						borderWidth: 2,
						pointBorderWidth: 0,
						pointRadius: 2,
						pointBackgroundColor: 'rgb(199, 0, 57)',
						fill: false
					}
				]
			},
			recovered: {
				labels,
				datasets: [
					{
						label: 'Recovered',
						data: recoveredNum,
						borderColor: ['rgba(40, 223, 153, 0.5)'],
						borderWidth: 2,
						pointBorderWidth: 0,
						pointRadius: 2,
						pointBackgroundColor: 'rgb(40, 223, 153)',
						fill: false
					}
				]
			},
			deaths: {
				labels,
				datasets: [
					{
						label: 'Deaths',
						data: deathsNum,
						borderColor: ['rgba(27, 38, 44, 0.5)'],
						borderWidth: 2,
						pointBorderWidth: 0,
						pointRadius: 2,
						pointBackgroundColor: 'rgb(27, 38, 44)',
						fill: false
					}
				]
			}
		};

		dispatch({
			type: GET_GLOBAL_HISTORY,
			payload: chart
		});
	} catch (err) {
		// console.error(err.response.data.message);
		dispatch({
			type: CHART_ERROR,
			payload: err.message
		});
	}
};

export const getCountryHistory = country => async dispatch => {
	dispatch({ type: SET_CHART_LOADING });

	country = country.toLowerCase();

	try {
		const res = await axios.get(
			`https://disease.sh/v3/covid-19/historical/${country}?lastdays=60`
		);

		const labels = Object.keys(res.data.timeline.cases);
		const infectedNum = Object.values(res.data.timeline.cases);
		const recoveredNum = Object.values(res.data.timeline.recovered);
		const deathsNum = Object.values(res.data.timeline.deaths);

		const infected = {
			labels,
			datasets: [
				{
					label: 'Infected',
					data: infectedNum,
					borderColor: ['rgba(199, 0, 57, 0.5)'],
					borderWidth: 2,
					pointBorderWidth: 0,
					pointRadius: 2,
					pointBackgroundColor: 'rgb(199, 0, 57)',
					fill: false
				}
			]
		};

		const recovered = {
			labels,
			datasets: [
				{
					label: 'Recovered',
					data: recoveredNum,
					borderColor: ['rgba(40, 223, 153, 0.5)'],
					borderWidth: 2,
					pointBorderWidth: 0,
					pointRadius: 2,
					pointBackgroundColor: 'rgb(40, 223, 153)',
					fill: false
				}
			]
		};

		const deaths = {
			labels,
			datasets: [
				{
					label: 'Deaths',
					data: deathsNum,
					borderColor: ['rgba(27, 38, 44, 0.5)'],
					borderWidth: 2,
					pointBorderWidth: 0,
					pointRadius: 2,
					pointBackgroundColor: 'rgb(27, 38, 44)',
					fill: false
				}
			]
		};

		dispatch({
			type: GET_COUNTRY_HISTORY,
			payload: { infected, recovered, deaths }
		});
	} catch (err) {
		// if (err.response.data.message) {
		// 	return console.log('hehehuhu');
		// }

		// console.error(err.response.data.message);
		dispatch({
			type: CHART_ERROR,
			payload: err.response.data.message
		});
	}
};

// const getCountryHistoryBar = country => async dispatch => {
//    try {
//       const
//    } catch (err) {

//    }
// }
