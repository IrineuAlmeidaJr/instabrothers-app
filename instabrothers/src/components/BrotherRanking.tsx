import { View, Image, Text } from "react-native";

interface Brother {
    name: string;
    followers: number;
    url_imgage: string;
    position: number;
}

export function BrotherRanking(brother: Brother) {  

    return (
        <View 
        className="
        w-full 
        mt-4 
        flex-1 
        flex-row  
        items-center 
        justify-between">      
            <View className='rounded-full border-4 border-background'>
                <Image 
                    className="w-20 h-20 bg-white rounded-full"
                    source={{
                        uri: brother.url_imgage,
                    }}
                /> 
                <Text 
                className="mt-1 text-white text-lg font-semibold text-center mx-1"
                >
                    {brother.position}º 
                </Text>               
            </View> 

            <Text
            className="text-white text-lg font-semibold text-center mx-1"
            >
                {brother.name.split(' ')[0]}
            </Text>  

            <Text
                className="text-white text-lg font-semibold text-center mx-1"
            >
                {brother.followers.toLocaleString()}
            </Text>                          
        </View>
    )
}