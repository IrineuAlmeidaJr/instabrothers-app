import { useRoute } from "@react-navigation/native";
import { View, Text, Platform } from "react-native";

import { Brother } from "../components/compAllBrothers/Brother";
import { Follower } from "../icons/Follower";
import { LineChart } from "../components/compDetailsBrother/LineChart";
import { BackButton } from "../components/buttons/BackButton";


interface Brother {
    id: number;
    name: string; 
    userInstagram: string;
    followers: number;
    newFollowers: number;
    urlImg: string;

    angel: number;
    inGame: boolean;
    leader: number;
    monster: Array<number>;
    wall: Array<number>;
}

export function DetailsBrotherInFeed(){
    const route = useRoute();
    const brother = route.params as Brother;
    
    if(Platform.OS === 'android') { 
        require('intl'); 
        require('intl/locale-data/jsonp/pt-BR'); 
    }

    return (
        <View className="flex-1 bg-orange-300 px-4 pt-12 justify-center items-center">
            <View className="w-screen ml-4 items-start ">
                <BackButton />
            </View>
            <View className="flex-1 items-center">
                <Brother 
                key={`${brother}-2`}
                id={brother.id}
                name={brother.name} 
                userInstagram={brother.userInstagram}
                followersBefore= {0}
                followersCurrent={brother.followers}
                urlImg={brother.urlImg}
                isDetailsBrother={false}

                inGame={brother?.inGame}
                angel={brother?.angel}
                leader={brother?.leader}
                monster={brother?.monster}
                wall={brother?.wall}  
                />
                
                <View className="justify-center items-center">
                        <Follower />

                        <View className="flex-row mt-3 justify-center items-center">
                            <Text className="ml-4 text-white font-semibold text-lg">
                                Atual: { brother.followers.toLocaleString('pt-BR')}
                            </Text>
                        </View>                        
                </View>
                    
                <LineChart
                    name={brother.name}
                />                
                
            </View>
        </View>
    )
}