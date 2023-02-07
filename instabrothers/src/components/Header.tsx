import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"

import Logo from "../assets/logo.svg"
import { BackButton } from './BackButton';


export function Header() {
    const { navigate, goBack } = useNavigation();

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    return (        
        <View className="py-2 w-full flex-row items-center justify-between">
            {
                routeName === 'home' &&               
                <>
                    <TouchableOpacity
                    className='mt-2'
                    onPress={() => navigate('feed')}
                    >                     
                        <Image                     
                        source={require('../assets/adaptive-icon.png')}
                        className="w-32 h-14"
                        // style={{width: 126, height: 53}} 
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity={0.7}
                    className="
                    h-12
                    mt-2
                    px-4 
                    justify-center 
                    items-center 
                    bg-orange-400
                    rounded-lg
                    border-2 
                    border-orange-400"
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
                </>
            }
           
            {
                routeName !== 'home' &&
                <BackButton />
            }
           
            
        </View>
    )
}
