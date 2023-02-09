import { useEffect, useState } from "react";
import { Alert, Platform, ScrollView, View } from "react-native";
import { apiGetCompareFollowers } from "../../lib/axios";
import { Loading } from "../loadings/Loading";
import { BrotherVertical } from "./BrotherVertical";

interface Brother {
    id: number,
    name: string,
    followers: number,
    instagram_username: string,
    url_image: string,
    new_followers: number
}

interface StatusBrothers {
    angel: number;
    in_game: Array<number>;
    leader: number;
    monster: Array<number>;
    wall: Array<number>;
}

interface BrothersData {
    brothers: Array<Brother>;
    followers_before: Array<number>;
    status_brothers: StatusBrothers;
}

export function ShowBrothersVertical() {
    const [data, setData] = useState<BrothersData | null >(null)

    function fetchDataBrothers() {
        try {
            apiGetCompareFollowers
            .then((response) => {
                setData(response.data)
            })
        } catch (err) {
            console.log(`Erro: ${err}`)
            Alert.alert('Ops', 'Erro ao carregar brothers');
        }
    }

    useEffect(() => {
        fetchDataBrothers();
    }, [])

    return (
        <View 
        className={`
        bg-orange-300 
        w-full
        mt-4 
        mb-1 
        shadow-2xl
        shadow-black
        ${Platform.OS === "android" ? 
            "shadow-xl shadow-black"
            :
            "shadow-sm shadow-orange-900"
        }
        `}>  
            {
                data ?                  
                <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >                    
                    <View className="flex-row justify-center items-center">
                    {
                        data &&
                        data.brothers.map((brother, index) => (
                            <BrotherVertical
                            key={`${brother}-${index}`} 
                            id={brother.id}
                            name={brother.name} 
                            userInstagram={brother.instagram_username}
                            followers={brother.followers}
                            newFollowers={brother.new_followers}
                            urlImg={brother.url_image}
    
                            inGame= {data.status_brothers?.in_game.includes(brother.id)}
                            angel= {data.status_brothers.angel}
                            leader= {data.status_brothers.leader}
                            monster= {data.status_brothers.monster}
                            wall={data.status_brothers.wall}
                            />
                        ))
                    }
                    </View>          
                </ScrollView>  
                : 
                <View className="my-4 h-16">
                    <Loading /> 
                </View>                
            }
        </View>
    )
}