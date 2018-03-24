import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeChordsModal } from '../../store/actions';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../Constants';

class ChordsModal extends Component {

	renderChordRows() {
		const { contentRowStyle, itemContainerStyle, itemStyle } = styles;
		const { selectedValues: { selectedKeyIndex, selectedCapo }, keys } = this.props;

		let count = 0;

		return keys.map((key, i) => {
			const keyChordIndex = (count + selectedKeyIndex) > 11 ?
				(count + selectedKeyIndex) - 12 : (count + selectedKeyIndex);

			const capoChordIndex = (keyChordIndex + selectedCapo) > 11 ?
				(keyChordIndex + selectedCapo) - 12 : (keyChordIndex + selectedCapo);

			count++;

			return (
				<View key={i} style={contentRowStyle}>
					<View style={itemContainerStyle}>
						<Text style={itemStyle}>
							{keys[keyChordIndex].key}
						</Text>
					</View>

					<View style={itemContainerStyle}>
						<Text style={itemStyle}>
							⇒
						</Text>
					</View>

					<View style={itemContainerStyle}>
						<Text style={itemStyle}>
							{keys[capoChordIndex].key}
						</Text>
					</View>
					
				</View>
			);
		});
	}

	render() {
		const { 
			modalStyle, containerStyle, buttonContainerStyle,
			headerStyle, contentStyle, contentRowStyle,
			itemContainerStyle, itemHeadStyle, itemStyle
		} = styles;

		const { selectedValues: { selectedKeyIndex, selectedCapo }, keys } = this.props;

		return (
			<Modal
				transparent
				animationType={'slide'}
				visible={this.props.modal.chordsModalIsOpen}
				onRequestClose={() => this.props.closeChordsModal()}
			>
				<View style={modalStyle}>
					<View style={containerStyle}>
						<View style={headerStyle}>
							<Text h4 style={{ color: 'white' }}>
								Chords Transition
							</Text>
						</View>
						<View style={contentStyle}>	
							<View style={contentRowStyle}>
								<View style={itemContainerStyle}>
									<Text style={[itemStyle, itemHeadStyle]}>
										Key { keys[selectedKeyIndex].key }
									</Text>
								</View>

								<View style={itemContainerStyle}>
									<Text style={[itemStyle, itemHeadStyle]}>
										⇒
									</Text>
								</View>

								<View style={itemContainerStyle}>
									<Text style={[itemStyle, itemHeadStyle]}>
										Capo { selectedCapo } 
									</Text>
								</View>
							</View>

							{this.renderChordRows()}
							
						</View>
						<View style={buttonContainerStyle}>
							<Button 
								raised
								icon={{ name: 'close' }}
								title='close'
								backgroundColor='#34495e'
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

	headerStyle: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#34495e'
	},
	contentStyle: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 10,
	},
	contentRowStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemContainerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemHeadStyle: {
		fontWeight: '900',
		fontSize: 14,
	},
	itemStyle: {
		alignItems: 'center',
		fontSize: 16,
	},
	buttonContainerStyle: {
		paddingBottom: 10,
	},
});

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
