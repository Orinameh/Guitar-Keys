import React from 'react';
import { FacebookAds } from 'expo';


const BottomBannerAd = () => (
	<FacebookAds.BannerView
		placementId='2009957729266899_2009971822598823'
		type='standard'
		onPress={() => console.log('Banner Ad Clicked')}
		onError={err => console.log('Banner Ad error', err)}
	/>
);

export default BottomBannerAd;

