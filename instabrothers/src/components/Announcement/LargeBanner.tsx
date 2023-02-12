import { View } from "react-native";

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export function LargeBanner( ){
    const adUnitId = "ca-app-pub-1821993809983279/2840393516"

    return (
        <View className="flex-1 justify-center items-center">
            <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.LARGE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            />
        </View>
    ) 
}