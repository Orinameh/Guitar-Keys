import { combineReducers } from 'redux';
import keys from './keyReducers';
import selectedValues from './selectionReducers';
import modal from './modalReducers';

export default combineReducers({
	keys, selectedValues, modal
});
