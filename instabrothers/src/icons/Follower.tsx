import { View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons"

export function Follower() {
    return (
        <TouchableOpacity 
            className="h-6 w-10 bg-red-500 items-center justify-center rounded-lg"
            activeOpacity={0.7}
        >
            <View className="z-10 mt-2">
                < MaterialIcons 
                    name="person"
                    color='white'
                    size={20}
                />
            </View>
            <View className="z-0 absolut h-3 w-3 bg-red-500 rotate-45">                
            </View>
        </TouchableOpacity>
    )
}