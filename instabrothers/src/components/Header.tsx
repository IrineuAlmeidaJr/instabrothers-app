import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"

export function Header() {
    const { navigate, goBack } = useNavigation();

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    return (        
        <View 
        className="w-screen py-2 px-5 flex-row items-center justify-between">           
            <TouchableOpacity
            className={`
            h-12
            w-12
            mt-2 
            ml-4
            justify-center
            items-center
            border-4
            bg-orange-300 
            border-orange-400 
            rounded-full
            shadow-xl 
            shadow-orange-900
            ${Platform.OS === "android" ? 
                "shadow-xl shadow-orange-900"
                :
                "shadow-sm shadow-orange-900"
            }
            `}
            onPress={goBack}
            >                     
                < MaterialIcons 
                name="home"
                color='white'
                size={30}
                />
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.7}
            className={`
            h-14
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
                    < MaterialCommunityIcons 
                    name="podium"
                    color='white'
                    size={20}
                    />
    
                    <Text className="text-white ml-3 font-semibold text-lg">
                        Ranking
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
