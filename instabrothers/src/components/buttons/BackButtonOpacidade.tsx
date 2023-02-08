import { TouchableOpacity, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export function BackButtonOpacidade() {
    const { goBack } = useNavigation();

    return(
        <TouchableOpacity
        activeOpacity={0.7}
        className={`
        absolute
        top-10
        h-auto 
        mx-3
        p-2
        z-20
        shadow-md 
        shadow-orange-900
        bg-orange-400 
        rounded-full
        ${Platform.OS === "android" ? 
        "shadow-lg"
        : 
        "shadow-sm"}        
        shadow-orange-700
        `}
        onPress={goBack}
        >
            < Feather 
                name={"arrow-left"}
                color='white'
                size={28}
            />

        </TouchableOpacity>
    )
}