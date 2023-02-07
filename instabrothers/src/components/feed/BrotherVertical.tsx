import { Text, Image, View, Platform } from "react-native";

interface Brother {
    name: string;
    followers: number;
    url_imgage: string;
}

export function BrotherVertical(brother: Brother){

    
    return (
        <View 
        className="
        py-2
        ml-3  
        items-center 
        justify-center">
            <View>
                <View 
                className={`
                rounded-full 
                border-4 
                border-orange-300 
                ${Platform.OS === 'android' ? 
                'shadow-lg shadow-black' 
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
                       
            <Text
            className="text-orange-400 text-sm font-semibold text-center mx-1"
            >
                {brother.name.split(' ')[0]}
            </Text>  

            <Text
                className="text-orange-400 text-sm font-semibold text-center mx-1"
            >
                {brother.followers.toLocaleString('pt-BR')}
            </Text>                          
        </View>
    )
}