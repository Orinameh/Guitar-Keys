import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordModal } from '../../store/actions';


class ViewChordButton extends Component {
	render() {
		return (
			<View style={this.props.style}>
				<Button
					raised
					icon={{ name: 'library-music' }}
					title='View transposed chord'
					backgroundColor='#2196F3'
					onPress={() => this.props.openChordModal()}
				/>
			</View>
		);
	}
}

export default connect(null, { openChordModal })(ViewChordButton);
