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
        z-10
        shadow-md 
        shadow-orange-900
        top-12
        w-[92%] 
        h-auto 
        borde-2
        mx-3
        p-1
        items-center 
        justify-center          
        bg-orange-400 
        rounded-full
        ${Platform.OS === "android" ? 
        "shadow-md"
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