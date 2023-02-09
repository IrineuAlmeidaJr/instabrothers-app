import { Text, View, Image, Platform } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

interface BrotherProps {
    brotherId: number;
    urlImg: string,

    leader?: number;
    angel?: number;    
    monster?: Array<number>; 
    wall?: Array<number>;  
}

export function BrotherInGameVertical(props: BrotherProps) {
    
    if (props.leader === props.brotherId) {
        return (
            <>
                <View 
                className={`
                rounded-full 
                border-4
                border-yellow-400 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-sm shadow-orange-900'}
                `}>
                    <Image
                    className="w-20 h-20 bg-white rounded-full "
                    source={{
                        uri: props.urlImg,
                    }}
                    />                    
                </View>  
            </>
        )
    } else if (props.angel === props.brotherId) {
        return (
            <>
                <View 
                className={`
                rounded-full 
                border-4
                border-blue-500 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-sm shadow-orange-900'}
                `}>
                    <Image
                    className="w-20 h-20 bg-white rounded-full "
                    source={{
                        uri: props.urlImg,
                    }}
                    />                    
                </View>  
            </>
        )
    } else if (props.monster && props.monster.includes(props.brotherId)) {
        return (
            <>
                <View 
                className={`
                rounded-full 
                border-4
                border-purple-700 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-sm shadow-orange-900'}
                `}>
                    <Image
                    className="w-20 h-20 bg-white rounded-full "
                    source={{
                        uri: props.urlImg,
                    }}
                    />                    
                </View>  
            </>
        )   
    } else if (props.wall && props.wall.includes(props.brotherId)) {
        return (
            <>
                <View 
                className={`
                rounded-full 
                border-4
                border-[#9a3401] 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-sm shadow-orange-900'}
                `}>
                    <Image
                    className="w-20 h-20 bg-white rounded-full "
                    source={{
                        uri: props.urlImg,
                    }}
                    />                    
                </View>  
            </>
        )
    } else {
        return (
            <>
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
                        uri: props.urlImg,
                    }}
                    />                    
                </View>  
            </>           
        )
    }
                
     
}
        