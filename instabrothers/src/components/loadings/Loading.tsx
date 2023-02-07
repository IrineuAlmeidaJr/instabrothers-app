import { ActivityIndicator, View } from "react-native";


export function Loading() {
    return (
        <View className="flex-1 justify-center items-center bg-orange-300">
            <ActivityIndicator 
                color="white"  
                size="large"           
            />
        </View>
    )
}