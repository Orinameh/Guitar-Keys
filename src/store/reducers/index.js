import { combineReducers } from 'redux';
import keys from './keyReducers';
import selectedValues from './selectionReducers';

export default combineReducers({
	keys, selectedValues
});
