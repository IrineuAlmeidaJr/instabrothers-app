import { View, Text } from "react-native";
import { BackButtonHome } from "../components/BackButtonHome";
import { Brother } from "../components/Brother";


export function AllBrothersFollower() {
    return (
        <View className="flex-1 bg-background px-4 pt-12">
            <View className="justify-center items-center" >
                <BackButtonHome />
            </View>
            
            <View className="flex-1 justify-center items-center">
                <Text className="font-bold text-white">
                    All Brothers Fallower
                </Text>
            </View>
        </View>
    )
}

