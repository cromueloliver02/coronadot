import { combineReducers } from 'redux';
import corona from './coronaReducers';
import chart from './chartReducers';

export default combineReducers({
	corona,
	chart
});
