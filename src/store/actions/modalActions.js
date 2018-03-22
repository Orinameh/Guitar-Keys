import {
	OPEN_CHORDS_MODAL,
	CLOSE_CHORDS_MODAL
} from './types';

export const openChordModal = () => ({
	type: OPEN_CHORDS_MODAL,
	payload: true
});

export const closeChordModal = () => ({
	type: CLOSE_CHORDS_MODAL,
	payload: false
});
