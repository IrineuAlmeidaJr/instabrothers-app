import { useNavigation } from '@react-navigation/native'
import { Text, View, Dimensions, TouchableOpacity, Image, Linking} from "react-native";
import { AntDesign } from "@expo/vector-icons"

const BROTHERS_LINE = 2;
const SCREEN_HORIZONTAL_PADDING = (16 * 2);

export const BROTHERS_MARGIN_BETWEEN = 16;

export const DAY_SIZE = (Dimensions.get('screen').width / BROTHERS_LINE) - (SCREEN_HORIZONTAL_PADDING + 16);

interface Brother {
    name: string;
    user_instagram: string;
    followers_before: number;
    followers_current: number;
    url_img: string;
    isDetailsBrother?: boolean;
}

export function Brother(brother: Brother) {
    const { navigate } = useNavigation();   

    return (
        <View className="flex-col justify-center items-center my-2" style={{width: DAY_SIZE + BROTHERS_MARGIN_BETWEEN }}>        
            <TouchableOpacity 
                className="m-2 rounded-full justify-center items-center"
                style={{width: DAY_SIZE, height: DAY_SIZE}}
                activeOpacity={brother.isDetailsBrother ? 0.7 : 1}
                onPress={ brother.isDetailsBrother ? () => navigate(
                    'detailsbrother', 
                    {
                        name: brother.name,
                        user_instagram: brother.user_instagram,
                        followers_before: brother.followers_before,
                        followers_current: brother.followers_current,
                        url_img: brother.url_img
                    })
                    :
                    () => null                                     
                }
            >
                <View className='rounded-full border-4 border-background'>
                    <Image 
                        className="bg-white rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: brother.url_img,
                        }}
                    />
                </View>                
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
                    onPress={() => Linking.openURL(`https://www.instagram.com/${brother.user_instagram}`)}
                >
                    < AntDesign 
                        name="instagram"
                        color='white'
                        size={20}
                    />
                
                    <Text className="text-white font-semibold text-lg">                       
                        {brother.user_instagram}
                    </Text>
                </TouchableOpacity>
            }
            
        </View>
    )
}