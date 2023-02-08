import { useEffect, useState } from "react";
import { Alert, Platform, ScrollView, View } from "react-native";
import { apiGetCompareFollowers } from "../../lib/axios";
import { Loading } from "../loadings/Loading";
import { BrotherVertical } from "./BrotherVertical";

interface Brother {
    name: string,
    new_followers: number,
    url_image: string,
}

export function ShowBrothersVertical() {
    const [brothers, setBrothers] = useState<Brother[] | null >(null)

    function fetchDataBrothers() {
        try {
            apiGetCompareFollowers
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
                brothers ?                  
                <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >                    
                    <View className="flex-row justify-center items-center">
                    {
                        brothers &&
                        brothers.map((brother, index) => (
                            <BrotherVertical
                            key={`${brother}-${index}`} 
                            name={brother.name} 
                            new_followers={brother.new_followers}
                            url_imgage={brother.url_image}
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