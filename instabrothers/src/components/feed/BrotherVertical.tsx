import { Text, Image, View, Platform, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

interface Brother {
    name: string;
    new_followers: number;
    url_imgage: string;
}

export function BrotherVertical(brother: Brother){
    const { navigate } = useNavigation();   
    
    return (
        <TouchableOpacity 
            // onPress={                 
            //     () => navigate(
            //         'detailsbrother', 
            //         {
            //             name: brother.name,
            //             userInstagram: brother.userInstagram,
            //             followersBefore: brother.followersBefore,
            //             followersCurrent: brother.followersCurrent,
            //             urlImg: brother.urlImg,

            //             inGame: brother?.inGame,
            //             angel: brother?.angel,
            //             leader: brother?.leader,
            //             monster: brother?.monster,
            //             wall: brother?.wall
            //         }
            //     )
        >    
            <View 
            className="
            py-2
            ml-4
            mr-1 
            items-center 
            justify-center">
                <View>
                    <View 
                    className={`
                    rounded-full 
                    border-4 
                    border-orange-400 
                    ${Platform.OS === 'android' ? 
                    'shadow-xl shadow-black' 
                    : 
                    'shadow-sm shadow-orange-900'}
                    `}>
                        <Image
                        className="w-20 h-20 bg-white rounded-full "
                        source={{
                            uri: brother.url_imgage,
                        }}
                        />                    
                    </View>   
                </View>   

                {
                    brother.new_followers >= 0 ?
                    <View className="flex-row items-center justify-center -ml-2">
                        <View className="mt-1 ">
                            <MaterialCommunityIcons 
                            name="arrow-up-bold"
                            color="white"
                            size={16}
                            />
                        </View>                   
                        <Text
                        className="mt-2 text-white text-sm font-semibold text-center "
                        >    
                            {
                                brother.new_followers.toLocaleString('pt-BR')
                            }
                        </Text> 
                    </View>
                    :
                    <View className="flex-row items-center justify-center -ml-2">
                        <View className="mt-2">
                            <MaterialCommunityIcons 
                            name="arrow-down-bold"
                            color="white"
                            size={16}
                            />
                        </View>                   
                        <Text
                        className="mt-2 text-white text-sm font-semibold text-center "
                        >                
                            {
                                 brother.new_followers.toLocaleString('pt-BR')
                            }
                        </Text> 
                    </View>
                }
                                        
            </View>
        </TouchableOpacity>
    )
}