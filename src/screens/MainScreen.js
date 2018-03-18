import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../utils/Constants';

class MainScreen extends Component {

	static navigationOptions = () => ({
		title: 'Guitar Keys',
		headerStyle: {
			height: Platform.OS === 'android' ? 34 + STATUS_BAR_HEIGHT : 34,
			backgroundColor: '#2196F3'
		},
		headerTitleStyle: {
			// marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
			color: '#FFF'
		},
		headerLeft: <View />
	})
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#E9EBEE' }}>
				<Text style={{ alignSelf: 'center', alignItems: 'center' }}> Main Screen </Text>
			</View>
		);
	}
}

export default MainScreen;
