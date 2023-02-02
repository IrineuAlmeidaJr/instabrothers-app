import { useEffect, useState } from "react";
import { Text, ScrollView, View, Alert} from "react-native";
import { api } from "../lib/axios";
import { Brother } from "./Brother";
import { LoadingText } from "./LoadingText";

type BrotherApi = {       
    followers: number; 
    instagram_username: string;
    name: string;
    url_image: string;
}

export function ShowBrothers() {
    const [brothers, setBrothers] = useState<BrotherApi[]>([])
    const [initialsFollowers, setInitialsFollowers] = useState<number[]>([])

    function fetchData() {
        try {
            api.get("brothers")
            .then(response => {
                setBrothers(response.data.brothers)
                setInitialsFollowers(response.data.followers_before)
            })
            
        } catch (error) {
            Alert.alert('Ops', 'Erro ao carregar os perfils dos brothers');
        }
    } 

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            className="flex-1 px-4 bg-blue-400"
        >
            {
                brothers.length > 0 ?                
                <View  className="flex-row flex-wrap justify-center items-center">
                    {
                        brothers.map((brother, index) => {
                            return(
                                <Brother 
                                    key={index} 
                                    name={brother.name} 
                                    user_instagram={brother.instagram_username}
                                    followers_before={initialsFollowers[index]}
                                    followers_current={brother.followers}
                                    url_img={brother.url_image}
                                    isDetailsBrother={true}
                                />
                            )
                        })
                    }                    
                </View>
                :                
                <LoadingText 
                    text="Carregando Brothers..."
                    subText="Esse processo pode demorar um pouco"
                />
            }
        </ScrollView>
    )
}