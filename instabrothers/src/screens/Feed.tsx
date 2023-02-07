import { Platform, View } from "react-native";

import { BackButtonOpacidade } from "../components/buttons/BackButtonOpacidade";
import { ShowBrothersVertical } from "../components/feed/ShowBrothersVertical";
import { ShowFeed } from "../components/feed/ShowFeed";

export function Feed() {
    return (
        <View
        className="flex-1 bg-orange-200"
        >
            <View className="w-full h-28 absolute z-10 top-0 bg-orange-300 opacity-80" /> 
            <BackButtonOpacidade />
            <View 
            className={`}
            absolute
            z-10 
            top-20
            shadow-md 
            shadow-orange-900
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-md shadow-orange-900"
            }
            `}>                
                <ShowBrothersVertical />
            </View>
            <ShowFeed />
        </View>
    )
}