import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../../store/actions';


class ViewChordButton extends Component {
	render() {
		return (
			<View style={this.props.style}>
				<Button
					raised
					icon={{ name: 'library-music' }}
					title='View transposed chord'
					backgroundColor='#34495e'
					onPress={() => this.props.openChordsModal()}
				/>
			</View>
		);
	}
}

export default connect(null, { openChordsModal })(ViewChordButton);
