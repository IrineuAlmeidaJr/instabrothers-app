import { View } from "react-native";
import { BackButton } from "../components/BackButton";
import { ShowBrothersVertical } from "../components/feed/ShowBrothersVertical";
import { ShowFeed } from "../components/feed/ShowFeed";

import { Header } from "../components/Header";

export function Feed() {
    return (
        <View
        className="flex-1 pt-12 bg-orange-300"
        >
            <BackButton />
            <ShowBrothersVertical />
            <ShowFeed />
        </View>
    )
}