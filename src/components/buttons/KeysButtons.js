import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectKeyIndex } from '../../store/actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class KeysButtons extends Component {

	render() {
		const { componentStyle, containerStyle, buttonStyle, selectedTextStyle } = styles;
		// selectedValues: { selectedKeyIndex } is used because selectedKeyIndex is a child obj of
		// selectedValues
		const { keys, selectedValues: { selectedKeyIndex } } = this.props;
		const keyButtons = keys.map(key => 
			(key.shortKey ? '/' : [key.key])
		);
		return (
			<View style={componentStyle}>
				<Text h3>Key</Text>
				<Text h1>C</Text>
				<ButtonGroup
					onPress={index => this.props.selectKeyIndex(index)}
					selectedIndex={selectedKeyIndex}
					buttons={keyButtons}
					containerStyle={containerStyle}
					buttonStyle={buttonStyle}
					selectedTextStyle={selectedTextStyle}

				/>
			</View>
		);
	}
}

const mapStateToProps = ({ keys, selectedValues }) => ({
	keys, selectedValues
});

export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);

const styles = StyleSheet.create({
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
	
});
