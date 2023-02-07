import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"

import Logo from "../assets/logo.svg"
import { BackButton } from './buttons/BackButton';


export function Header() {
    const { navigate, goBack } = useNavigation();

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    return (        
        <View 
        className="w-screen py-2 px-5 flex-row items-center justify-between">           
            <TouchableOpacity
            className={`
            mt-2 
            border-4 
            border-orange-400 
            rounded-lg 
            shadow-xl 
            shadow-orange-900
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-sm shadow-orange-900"
            }
            `}
            onPress={() => navigate('feed')}
            >                     
                <Image                     
                source={require('../assets/adaptive-icon.png')}
                className="w-32 h-14 rounded-sm"
                // style={{width: 126, height: 53}} 
                />
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.7}
            className={`
            h-16
            mt-2
            px-5
            justify-center 
            items-center 
            bg-orange-300
            rounded-lg
            border-4
            border-orange-400
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-sm shadow-orange-900"
            }
            `}
            onPress={() => navigate('rankingbrothers')}
            >
                <View className='flex-row justify-center align-center'>
                    < AntDesign 
                        name="areachart"
                        color='white'
                        size={20}
                    />
    
                    <Text className="text-white ml-3 font-semibold text-lg">
                        Todos
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
