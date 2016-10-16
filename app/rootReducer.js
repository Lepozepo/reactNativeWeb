import {combineReducers} from 'redux';
import helloWorld from './helloWorld';

export default combineReducers({
	[helloWorld.constants.MODULE_NAME]: helloWorld.reducer,
});
