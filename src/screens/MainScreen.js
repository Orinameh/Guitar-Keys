import React, { Component } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Divider } from 'react-native-elements';
import Expo from 'expo';
import KeysButtons from '../components/buttons/KeysButtons';
import GuitarButtons from '../components/buttons/GuitarButtons';
import GuitarKey from '../components//buttons/GuitarKey';
import ViewChordButton from '../components/buttons/ViewChordButton';
import ChordsModal from '../utils/modals/ChordsModal';
import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../utils/Constants';

const cacheImage = images => images.map(image => {
	// if it is a url string, then fetch the image otherwise
	if (typeof image === 'string') return Image.prefetch(image);
	// load from where it was stored in the module or asset
	return Expo.Asset.fromModule(image).downloadAsync();
});


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
		headerLeft: (
			<Image
				source={icon}
				style={styles.imageStyle}
			/>
		)
	})

	state = {
		appIsReady: false
	}

	componentWillMount() {
		this._loadAssetsAsync();
	}

	async _loadAssetsAsync() {
		const imageAssets = cacheImage([icon]);
		// await pauses the async function until the promise is being resolved
		await Promise.all([...imageAssets]);
		this.setState({ appIsReady: true });
	}

	
	render() {
		const { containerStyle, dividerStyle, buttonContainerStyle } = styles;
		return (
			<View style={{ flex: 1, backgroundColor: '#E9EBEE' }}>
				{/* Chord Modal */}
				<ChordsModal />
				<View style={containerStyle}>
					<KeysButtons />
					<Divider style={dividerStyle} />
					<GuitarButtons />
					<Divider style={dividerStyle} />
					{/* Capo Keys */}
					<GuitarKey />
				</View>

				{/* View Chord Button */}
				<ViewChordButton style={buttonContainerStyle} />

				{/* Banner Ads */}
			</View>
		);
	}
}

export default MainScreen;

const styles = StyleSheet.create({
	imageStyle: {
		// marginTop: 20,
		marginLeft: 10,
		width: 40,
		height: 40
	},
	containerStyle: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	dividerStyle: {
		width: SCREEN_WIDTH * 0.9,
		backgroundColor: '#2196F3'
	},
	buttonContainerStyle: {
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
	}
});

