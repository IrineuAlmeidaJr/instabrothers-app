import { Text, View, Platform } from "react-native";

export function ShowDate() {
    const date = new Date().toLocaleDateString('pt-BR');
    // const dateString =  `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

    return (
        <View 
        className={`
        py-1
        bg-orange-300
        justify-center
        items-center
        ${Platform.OS === "android" ? 
        "shadow-md"
        : 
        "shadow-sm"}        
        shadow-orange-700
        `}
        >
            <Text className="text-white text-lg font-bold">
                {date}
            </Text>
        </View>
    )
}