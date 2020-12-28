import React, { Fragment } from 'react';
import './App.css';

import Header from './components/layout/Header';
import CountryInfo from './components/layout/CountryInfo';
import Results from './components/results/ResultCards';
import Chart from './components/charts/Charts';
import Footer from './components/layout/Footer';
// redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<Fragment>
				<Header />
				<CountryInfo />
				<Results />
				<Chart />
				<Footer />
			</Fragment>
		</Provider>
	);
};

export default App;
