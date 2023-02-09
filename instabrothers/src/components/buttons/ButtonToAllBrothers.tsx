
import { TouchableOpacity, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export function ButtonToAllBrothers() {
    const { navigate } = useNavigation();

    return(
        <TouchableOpacity
        activeOpacity={0.7}
        className={`
        absolute
        top-10
        h-auto 
        ml-7
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
        onPress={() => navigate('allbrothers')}
        >
            < MaterialCommunityIcons 
                name={"account-details"}
                color='white'
                size={28}
            />

        </TouchableOpacity>
    )
}