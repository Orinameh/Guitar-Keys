import { Dimensions } from 'react-native';
import { Constants } from 'expo';

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;


export const BUTTON_GROUP_STYLES = {
	componentStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerStyle: {
		height: 40,
		width: SCREEN_WIDTH * 0.9
	},
	buttonStyle: {
		backgroundColor: '#fff',
	},

	selectedTextStyle: {
		color: '#FF3D57',
		fontWeight: '900',
	}
};
