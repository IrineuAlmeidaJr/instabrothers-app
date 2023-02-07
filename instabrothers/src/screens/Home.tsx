import { View } from "react-native";

import { Header } from "../components/Header";
import { ShowBrothers } from "../components/home/ShowBrothers";

export function Home() {

    
    return (
        <View className="flex-1 pt-12 bg-orange-400">            
            <View className="pb-4 bg-orange-400 ">
                <View className="bg-orange-300  opacity-100 px-7">
                    <Header /> 
                </View>                
            </View>
            < ShowBrothers />
        </View>
    )
}

