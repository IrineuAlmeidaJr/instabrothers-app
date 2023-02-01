import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function BackButtonHome() {
    const { goBack } = useNavigation();

    return (
        <TouchableOpacity
        activeOpacity={0.7}
        className="items-center justify-center w-14 h-10 px-4 border rounded-full bg-white border-slate-200"
        onPress={goBack}
        >
            < Feather 
                name="home"
                color='gray'
                size={20}
            />

        </TouchableOpacity>
    )
}