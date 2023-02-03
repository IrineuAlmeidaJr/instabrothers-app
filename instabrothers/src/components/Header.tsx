import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"

import Logo from "../assets/logo.svg"
import { BackButton } from './BackButton';


export function Header() {
    const { navigate, goBack } = useNavigation();

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    return (        
        <View className="w-full flex-row items-center justify-between">
            {
                routeName === 'home' &&               
                <>
                    <Logo />

                    <TouchableOpacity
                    activeOpacity={0.7}
                    className="flex-row h-10 mt-2 px-4 justify-center items-center bg-blue-400 rounded-lg"
                    onPress={() => navigate('rankingbrothers')}
                    >
                        < AntDesign 
                            name="areachart"
                            color='white'
                            size={20}
                        />
        
                        <Text className="text-white ml-3 font-semibold text-lg">
                            Todos
                        </Text>
        
                    </TouchableOpacity>
                </>
            }
           
            {
                routeName !== 'home' &&
                <BackButton />
            }
           
            
        </View>
    )
}
