import { View } from "react-native";

import { Header } from "../components/Header";
import { ShowBrothers } from "../components/ShowBrothers";

export function Home() {
    return (
        <View className="flex-1 bg-background">
            <View className="pb-4 px-4 pt-12 bg-background">
                <Header /> 
            </View>
            < ShowBrothers />
        </View>
    )
}

