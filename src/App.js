import React, { Fragment } from 'react';
import './App.css';

import Header from './components/layout/Header';
import CountrySelectForm from './components/form/CountrySelectForm';
import Results from './components/results/Results';
// redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<Fragment>
				<Header />
				<CountrySelectForm />
				<Results />
			</Fragment>
		</Provider>
	);
};

export default App;
