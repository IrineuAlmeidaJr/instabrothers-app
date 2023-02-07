import { useEffect, useState } from "react"
import { Alert, ScrollView, View } from "react-native"

import { apiGetRanking } from "../../lib/axios"

import { BrotherRanking } from "./BrotherRanking"
import { LoadingText } from "../loadings/LoadingText"

interface BrotherRanking {
    name: string,
    followers: number,
    url_image: string,
}

export function ShowBrothersRanking() {
    const [brothersRanking, setBrothersRanking] = useState<BrotherRanking[] | null >(null)

    function fetchDataRanking() {
        try {
            apiGetRanking
            .then((response) => {
                setBrothersRanking(response.data)
            })
        } catch (err) {
            console.log(`Erro: ${err}`)
            Alert.alert('Ops', 'Erro ao carregar ranking');
        }
    }

    useEffect(() => {
        fetchDataRanking();
    }, [])

    return(
        <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        >
            {
                brothersRanking ?              
                <View className="flex-1 pb-16 justify-center items-center">
                    {
                        brothersRanking &&
                        brothersRanking.map((brother, index) => (
                            <BrotherRanking
                            key={`${brother}-${index}`} 
                            name={brother.name} 
                            followers={brother.followers}
                            url_imgage={brother.url_image}
                            position={index+1}
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
    )
}