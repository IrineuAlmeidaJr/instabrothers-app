import { Text, View, Image, Platform } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

import { DAY_SIZE } from "./Brother" 

interface BrotherProps {
    brotherId: number;
    urlImg: string,

    leader?: number;
    angel?: number;    
    monster?: Array<number>; 
    wall?: Array<number>;  
}

export function BrotherInGame(props: BrotherProps) {
    
    if (props.leader === props.brotherId) {
        return (
            <>
                <View 
                className={`
                rounded-full 
                border-4 
                border-yellow-400 
                justify-center
                items-center 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-md shadow-orange-900'}
                `}                
                >
                    <Image 
                        className="bg-white rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: props.urlImg,
                        }}
                    />                        
                </View>            
                <View className='h-7 w-7 -mt-4 bg-yellow-500 items-center justify-center borde-2 rounded-full'>
                    < MaterialCommunityIcons 
                    name="crown"
                    color='#FFF76F'
                    size={20}
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
                justify-center 
                items-center 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-md shadow-orange-900'}
                `}>
                    <Image 
                        className="bg-white rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: props.urlImg,
                        }}
                    />                        
                </View>            
                <View className='h-7 w-7 -mt-4 bg-blue-500 items-center justify-center borde-2 rounded-full'>
                    <Text className='text-gray-900 font-bold text-xl text-center'>
                        😇
                    </Text>
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
                justify-center 
                items-center 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-md shadow-orange-900'}
                `}>
                    <Image 
                        className="bg-white rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: props.urlImg,
                        }}
                    />                        
                </View>            
                <View className='h-7 w-7 -mt-4 bg-purple-700 items-center justify-center borde-2 rounded-full'>
                    < FontAwesome 
                    name="optin-monster"
                    color='#F0FAF0'
                    size={18}
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
                justify-center 
                items-center 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 
                'shadow-md shadow-orange-900'}
                `}>
                    <Image 
                        className="bg-white rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: props.urlImg,
                        }}
                    />                        
                </View>            
                <View className='h-7 w-7 -mt-4 bg-[#a13905] items-center justify-center borde-2 rounded-full'>
                    < MaterialCommunityIcons 
                    name="wall"
                    color='#FFDFCF'
                    size={18}
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
                justify-center 
                items-center 
                ${Platform.OS === 'android' ? 
                'shadow-xl shadow-black' 
                : 'shadow-md shadow-orange-900'}
                `}
                >
                    <Image 
                        className="bg-orange-100 rounded-full"
                        style={{width: DAY_SIZE, height: DAY_SIZE}}
                        source={{
                            uri: props.urlImg,
                        }}
                    />                        
                </View>            
                {/* <View className='h-7 w-7 -mt-4 bg-gray-700  items-center justify-center borde-2 rounded-full'> */}
                    <Text className='text-gray-900 font-bold text-xl text-center'>
                        
                    </Text>
                {/* </View> */}
            </>
        )
    }
                
     
}
        