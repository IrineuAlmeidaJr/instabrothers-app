import { View, Image, Text, Platform } from "react-native";

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
        w-[100%]
        px-5
        mt-4 
        flex-1 
        flex-row  
        items-center 
        justify-between">
            <View>
                <View 
                className={`
                rounded-full 
                border-4 
                border-orange-400 
                ${Platform.OS === 'android' ? 
                'shadow-2xl shadow-black' 
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
                {brother.followers.toLocaleString('pt-BR')}
            </Text>                          
        </View>
    )
}