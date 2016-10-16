import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const reduxStore = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default reduxStore;
