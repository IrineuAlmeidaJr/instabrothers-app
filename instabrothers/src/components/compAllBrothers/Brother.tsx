import { useNavigation } from '@react-navigation/native'
import { Text, View, Dimensions, TouchableOpacity, Image, Linking, Platform} from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { BrotherInGame } from './BrotherInGame';

const BROTHERS_LINE = 2;
const SCREEN_HORIZONTAL_PADDING = (16 * 2);

export const BROTHERS_MARGIN_BETWEEN = 16;

export const DAY_SIZE = (Dimensions.get('screen').width / BROTHERS_LINE) - (SCREEN_HORIZONTAL_PADDING + 16);

interface Brother {
    id: number;
    name: string;
    userInstagram: string;
    followersBefore: number;
    followersCurrent: number;
    urlImg: string;
    isDetailsBrother?: boolean;
    
    inGame?: boolean;
    leader?: number;
    angel?: number;    
    monster?: Array<number>; 
    wall?: Array<number>;  
}

export function Brother(brother: Brother) {
    const { navigate } = useNavigation();   

    return (
        <View 
        className="flex-col justify-center items-center my-2 mx-2" 
        style={{width: DAY_SIZE + BROTHERS_MARGIN_BETWEEN }}
        >        
            <TouchableOpacity 
            className="m-2 rounded-full justify-center items-center"
            style={{width: DAY_SIZE, height: DAY_SIZE}}
            activeOpacity={brother.isDetailsBrother ? 0.7 : 1}
            onPress={ 
                brother.isDetailsBrother ? 
                () => navigate(
                    'detailsbrother', 
                    {
                        id: brother.id,
                        name: brother.name,
                        userInstagram: brother.userInstagram,
                        followersBefore: brother.followersBefore,
                        followersCurrent: brother.followersCurrent,
                        urlImg: brother.urlImg,

                        inGame: brother?.inGame,
                        angel: brother?.angel,
                        leader: brother?.leader,
                        monster: brother?.monster,
                        wall: brother?.wall
                    }
                )
                :
                () => null                                     
                }
                >
                {
                    brother?.inGame ?
                    <View className='items-center'>
                        <BrotherInGame 
                        brotherId={brother.id}
                        urlImg={brother.urlImg}
                        angel={ brother?.angel}
                        leader={brother?.leader}
                        monster={brother?.monster}
                        wall={brother?.wall}  
                        />
                    </View>
                    : 
                    <View className='items-center'>
                        <View 
                        className={`
                        rounded-full 
                        border-4 
                        border-red-600 
                        justify-center 
                        items-center
                        ${Platform.OS === 'android' ? 
                        'shadow-lg shadow-black' 
                        : 
                        'shadow-md shadow-orange-900'}
                        `}
                        >
                            <Image 
                                className="bg-white rounded-full"
                                style={{width: DAY_SIZE, height: DAY_SIZE}}
                                source={{
                                    uri: brother.urlImg,
                                }}
                            />                        
                        </View>    
                        <View 
                        className={`}
                        h-7 
                        w-7 
                        -mt-4 
                        bg-red-600 
                        items-center 
                        justify-center 
                        borde-2 
                        rounded-full
                        ${Platform.OS === 'android' && 'z-10 shadow-2xl shadow-black'}
                        `}>
                            <Text 
                            className={`
                            ${Platform.OS === 'android' && '-mt-1'}
                            text-red-900 
                            font-extrabold 
                            text-lg 
                            text-center`}
                            >
                                x
                            </Text>
                        </View>                        
                    </View>                      
                }                        
            </TouchableOpacity>
            {
                brother.isDetailsBrother ?
                <Text
                    className="text-white text-lg font-semibold text-center mx-1"
                >
                    {brother.name}
                </Text>
                :
                <TouchableOpacity 
                    className="flex-row justify-center items-center gap-1"
                    onPress={() => Linking.openURL(`https://www.instagram.com/${brother.userInstagram}`)}
                >
                    < AntDesign 
                        name="instagram"
                        color='white'
                        size={20}
                    />
                
                    <Text className="text-white font-semibold text-lg">                       
                        {brother.userInstagram}
                    </Text>
                </TouchableOpacity>
            }
            
        </View>
    )
}