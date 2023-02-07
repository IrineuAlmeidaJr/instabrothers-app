import { useEffect, useState } from "react";
import { Text, ScrollView, View, Alert} from "react-native";
import { apiGetAllBrothers } from "../../lib/axios";
import { Brother } from "./Brother";
import { LoadingText } from "../loadings/LoadingText";

interface BrotherApi {       
    followers: number; 
    id: number;
    instagram_username: string;
    name: string;
    url_image: string;
}

interface StatusBrothers {
    angel: number;
    in_game: Array<number>;
    leader: number;
    monster: Array<number>;
    wall: Array<number>;
}

export function ShowBrothers() {
    const [brothers, setBrothers] = useState<BrotherApi[]>([])
    const [initialsFollowers, setInitialsFollowers] = useState<number[]>([])
    const [statusBrothers, setStatusBrothers] = useState<StatusBrothers | null>(null)

    function fetchData() {
        try {
            apiGetAllBrothers
            .then(response => {
                setBrothers(response.data.brothers)
                setInitialsFollowers(response.data.followers_before)
                setStatusBrothers(response.data.status_brothers)
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
        className="flex-1 px-4 py-2  bg-orange-300"
        >
            {
                brothers.length > 0 && statusBrothers ?                
                <View  className="pb-16 flex-row flex-wrap justify-center items-center">
                    {
                        brothers.map((brother, index) => (                            
                            <Brother 
                            key={index}
                            id={brother.id}
                            name={brother.name} 
                            userInstagram={brother.instagram_username}
                            followersBefore={initialsFollowers[index]}
                            followersCurrent={brother.followers}
                            urlImg={brother.url_image}
                            isDetailsBrother={true}
                            inGame={statusBrothers?.in_game.includes(brother.id)}
                            angel={statusBrothers?.angel}
                            leader={statusBrothers?.leader}
                            monster={statusBrothers?.monster}
                            wall={statusBrothers?.wall}                            
                            />                            
                        ))
                    }                    
                </View>
                :                
                <LoadingText 
                    text="Carregando Brothers..."
                    subText="Esse processo pode demorar um pouco na primeira vez"
                />
            }
        </ScrollView>
    )
}