import { View } from "react-native";

import { Header } from "../components/Header";
import { ShowBrothers } from "../components/ShowBrothers";

export function Home() {
    return (
        <View className="flex-1 bg-background px-4 pt-12">
            <Header />
            <ShowBrothers />
        </View>
    )
}

