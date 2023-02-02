import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"


import Logo from "../assets/logo.svg"

export function Header() {
    const { navigate, goBack } = useNavigation();

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    return (        
        <View className="w-full flex-row items-center justify-between">
            {
                routeName === 'home' &&               
                <Logo />
            }
           
            {
                routeName !== 'home' &&
                <TouchableOpacity
                activeOpacity={0.7}
                className="flex-row h-10 px-4 border bg-white border-slate-200 rounded-lg items-center"
                onPress={goBack}
                >
                    < Feather 
                        name="arrow-left"
                        color='gray'
                        size={20}
                    />

                </TouchableOpacity>
            }

            {/* <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row h-10 px-4 border bg-white border-slate-200 rounded-lg items-center"
            onPress={() => navigate('allbrothersfollower')}
            >
                < AntDesign 
                    name="areachart"
                    color='gray'
                    size={20}
                />

                <Text className="text-gray-500 ml-3 font-semibold text-base">
                    Todos
                </Text>

            </TouchableOpacity> */}
            
        </View>
    )
}
