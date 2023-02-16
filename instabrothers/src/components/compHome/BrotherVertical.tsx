import { Text, Image, View, Platform, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { BrotherInGameVertical } from "./BrotherInGameVertical";

interface BrotherProps {
    id: number;
    name: string; 
    userInstagram: string;
    followers: number;
    newFollowers: number;
    urlImg: string;

    inGame?: boolean;
    leader?: number;
    angel?: number;    
    monster?: Array<number>; 
    wall?: Array<number>;  
}

export function BrotherVertical(brother: BrotherProps){
    const { navigate } = useNavigation();   

    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={                 
                () => navigate(
                'detailsbrotherinfeed', 
                    {
                        id: brother.id,
                        name: brother.name,
                        userInstagram: brother.userInstagram,
                        followers: brother.followers,
                        urlImg: brother.urlImg,

                        inGame: brother?.inGame,
                        angel: brother?.angel,
                        leader: brother?.leader,
                        monster: brother?.monster,
                        wall: brother?.wall
                    }
                )
            }    
        >    
            <View 
            className="
            py-2
            ml-4
            mr-1 
            items-center 
            justify-center"
            >
                {
                    brother?.inGame ?
                    <BrotherInGameVertical
                    brotherId={brother.id}
                    urlImg={brother.urlImg}
                    angel={ brother?.angel}
                    leader={brother?.leader}
                    monster={brother?.monster}
                    wall={brother?.wall}  
                    />
                    :
                    <>
                        <View 
                        className={`
                        rounded-full 
                        border-4
                        border-red-500 
                        ${Platform.OS === 'android' ? 
                        'shadow-xl shadow-black' 
                        : 
                        'shadow-sm shadow-orange-900'}
                        `}>
                            <Image
                            className="w-20 h-20 bg-white rounded-full "
                            source={{
                                uri: brother.urlImg,
                            }}
                            />                    
                        </View>  
                    </>
                    
                }   

                {
                    brother.newFollowers >= 0 ?
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
                                brother.newFollowers.toLocaleString('pt-BR')
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
                                brother.newFollowers.toLocaleString('pt-BR')
                            }
                        </Text> 
                    </View>
                }                                        
            </View>
        </TouchableOpacity>
    )
}