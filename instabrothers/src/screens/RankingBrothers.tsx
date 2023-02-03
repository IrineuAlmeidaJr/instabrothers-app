import { View, Alert } from "react-native";

import { BackButton } from "../components/BackButton";
import { ShowBrothersRanking } from "../components/ShowBrothersRanking";


export function RankingBrothers() {

    
    return (
        <View className="flex-1 bg-background">
            <View className="px-2 pt-12 bg-background ">
                <BackButton />
            </View>
            <ShowBrothersRanking />
        </View>
    )
}

