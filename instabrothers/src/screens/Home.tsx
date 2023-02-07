import { View, Platform } from "react-native";

import { Header } from "../components/Header";
import { ShowBrothers } from "../components/home/ShowBrothers";

export function Home() {

    
    return (
        <View className="flex-1 bg-orange-300">    
            <View className="w-full h-14 absolute z-10 top-0 bg-orange-300 opacity-80" /> 
            <View 
            className={`}
            absolute
            z-10 
            top-12 
            bg-orange-300
            shadow-md 
            shadow-orange-900
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-md shadow-orange-900"
            }
            `}>
                <View className="bg-orange-200">
                    <Header /> 
                </View>                
            </View>
            < ShowBrothers />
        </View>
    )
}

