import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../reduxStore';
import {HelloWorld} from '../helloWorld/components';

export default class Web extends Component {
	render() {
		return (
			<Provider store={store}>
				<HelloWorld />
			</Provider>
		);
	}
}
