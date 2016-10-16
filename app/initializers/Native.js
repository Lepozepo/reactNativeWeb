import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import store from '../reduxStore';
import {HelloWorld} from '../helloWorld/components';

export default class Native extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
					<StatusBar hidden />
					<HelloWorld />
				</View>
			</Provider>
		);
	}
}
