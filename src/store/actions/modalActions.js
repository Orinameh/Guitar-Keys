import { FacebookAds } from 'expo';
import {
	OPEN_CHORDS_MODAL,
	CLOSE_CHORDS_MODAL
} from './types';

export const openChordsModal = () => ({
	type: OPEN_CHORDS_MODAL,
	payload: true
});

let expirationDate; /* Helps to display ads within 2 minutes */

export const closeChordsModal = () => {
	if (!expirationDate || new Date() > expirationDate) {
		expirationDate = new Date(
			new Date().getTime() + (2 * 60 * 1000)
		);
	
		FacebookAds.InterstitialAdManager.showAd('2009957729266899_2009974189265253')
		.then(console.log('Interstitial ad showing')).catch(err => console.log('err', err));
	}
	return { type: CLOSE_CHORDS_MODAL, payload: false };
};
