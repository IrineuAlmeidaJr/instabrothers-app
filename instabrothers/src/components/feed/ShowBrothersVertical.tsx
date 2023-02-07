import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { apiGetRanking } from "../../lib/axios";
import { LoadingText } from "../loadings/LoadingText";
import { BrotherVertical } from "./BrotherVertical";

interface Brother {
    name: string,
    followers: number,
    url_image: string,
}

export function ShowBrothersVertical() {
    const [brothers, setBrothers] = useState<Brother[] | null >(null)

    function fetchDataBrothers() {
        try {
            apiGetRanking
            .then((response) => {
                setBrothers(response.data)
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
        <View>            
            <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            className="bg-orange-200 w-full mt-4 mb-1"
            >
                {
                    brothers ? 
                    <View className="flex-row">
                    {
                        brothers &&
                        brothers.map((brother, index) => (
                            <BrotherVertical
                            key={`${brother}-${index}`} 
                            name={brother.name} 
                            followers={brother.followers}
                            url_imgage={brother.url_image}
                            />
                        ))
                    }
                    </View>
                    :
                    <LoadingText
                    text="Carregando Ranking..."
                    />
                }
                
            </ScrollView>
        </View>
    )
}