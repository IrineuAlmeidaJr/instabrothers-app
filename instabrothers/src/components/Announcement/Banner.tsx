import { View } from "react-native";

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export function Banner( ){
    const adUnitId = "ca-app-pub-1821993809983279/2840393516"

    return (
        <View className="flex-1 justify-center items-center">
            <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            />
        </View>
    ) 
}