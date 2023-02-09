import { Platform, View } from "react-native";

import { ButtonToAllBrothers } from "../components/buttons/ButtonToAllBrothers";
import { ShowBrothersVertical } from "../components/compHome/ShowBrothersVertical";
import { ShowDate } from "../components/compHome/ShowDate";
import { ShowNews } from "../components/compHome/ShowNews";

export function Home() {
    return (
        <View
        className="flex-1 bg-orange-200"
        >
            <View className="w-full h-36 absolute z-10 top-0 bg-orange-200 opacity-80" /> 
            <ButtonToAllBrothers />
            <View 
            className={`
            absolute
            w-screen
            z-10 
            top-11
            shadow-md 
            shadow-orange-900
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-md shadow-orange-900"
            }
            `}>   
                <ShowDate />             
                <ShowBrothersVertical />
            </View>
            <ShowNews />
        </View>
    )
}