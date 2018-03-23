import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeChordsModal } from '../../store/actions';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../Constants';

class ChordsModal extends Component {
	render() {
		const { 
			modalStyle, containerStyle, buttonContainerStyle
		} = styles;
		return (
			<Modal
				transparent
				animationType={'slide'}
				visible={this.props.modal.chordsModalIsOpen}
				onRequestClose={() => this.props.closeChordsModal()}
			>
				<View style={modalStyle}>
					<View style={containerStyle}>
						<View style={buttonContainerStyle}>
							<Button 
								raised
								icon={{ name: 'close' }}
								title='close'
								backgroundColor='#2196F3'
								onPress={() => this.props.closeChordsModal()}
							/>		
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

const MARGIN_PERC = 0.05;
const styles = StyleSheet.create({
	modalStyle: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	containerStyle: {
		flex: 1,
		marginTop: SCREEN_HEIGHT * MARGIN_PERC,
		marginBottom: SCREEN_HEIGHT * MARGIN_PERC,
		marginLeft: SCREEN_WIDTH * MARGIN_PERC,
		marginRight: SCREEN_WIDTH * MARGIN_PERC,
		backgroundColor: 'white'
	},

	buttonContainerStyle: {
		paddingBottom: 10,
	}
});

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
