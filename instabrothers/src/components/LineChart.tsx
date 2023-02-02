import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { ScrollView, View, Text } from "react-native";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
import { api } from "../lib/axios";

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LoadingText } from "./LoadingText";

interface NameProps {
    name: string;
}

type DetailsBrother = {
    days: Array<string>;
    followers: Array<number>;
}

export function LineChart({ name }: NameProps) {
    const [dataDetailsBrother, setDataDetailsBrother] = useState<DetailsBrother>({ days:[], followers:[] })

    function fetchData() {
        try {
            api.get(`brother/${name}`)
            .then(response  => {              
                setDataDetailsBrother(response.data)
            })
        } catch (err) {
            Alert.alert('Ops', 'Erro ao carregar gráfico');
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <ScrollView
            className="mt-2 bg-white w-full"
            showsVerticalScrollIndicator={false} 
        >
            <View 
                className="mt-2 bg-white rounded-lg w-[92%]"
            >
                {
                    dataDetailsBrother.days.length > 0 ?   
                    <>           
                        <VictoryChart                      
                            theme={ VictoryTheme.material }                    
                        >
                        <VictoryLine 
                            style={{                
                            data: { stroke: "#FF0000" },
                            parent: { border: "1px solid #FFF"}
                            }}
                            data={dataDetailsBrother.followers.slice(1)}
                            animate={{
                                duration: 4000,
                                onLoad: { duration: 2000 }
                            }}
                        />
                        </VictoryChart>   

                        <View className="mt-2 pb-16 bg-white w-full justify-center items-center">    
                            <Text className="mb-4 font-bold text-base">
                                DETALHADO    
                            </Text>
                            <View >
                            {
                                dataDetailsBrother.days[0] &&
                                dataDetailsBrother.days.map((day: string, index: number) => {                            
                                    if (index > 0) {
                                        if (dataDetailsBrother.followers[index] > dataDetailsBrother.followers[index-1]) {
                                            return (                                           
                                                <View key={day} className="flex-row">                                                                     
                                                    <Text className="font-regular text-base text-green-600">
                                                        {day.split('-').reverse().join('/')}
                                                    </Text> 
                                                    < MaterialCommunityIcons 
                                                        name="arrow-up-right-bold"
                                                        color='green'
                                                        size={20}
                                                    />  
                                                    <Text className="ml-4 font-regular text-base text-green-600">
                                                        {(dataDetailsBrother.followers[index]*1000).toLocaleString("pt-BR")}
                                                    </Text>                                              
                                                </ View>
                                            )
                                        } else {
                                            return (                                           
                                                <View key={day} className="flex-row">                                                                     
                                                    <Text className="font-regular text-base text-red-600">
                                                        {day.split('-').reverse().join('/')}
                                                    </Text>  
                                                    < MaterialCommunityIcons 
                                                        name="arrow-down-right-bold"
                                                        color='red'
                                                        size={20}
                                                    />  
                                                    <Text className="ml-4 font-regular text-base text-red-600">
                                                        {(dataDetailsBrother.followers[index]*1000).toLocaleString("pt-BR")}
                                                    </Text>    
                                                </ View>
                                            )
                                        }
                                    }                                
                                    
                                    return (                                           
                                        <View key={day} className="flex-row">                                                                     
                                            <Text className="font-regular text-base text-gray-800">
                                                {day.split('-').reverse().join('/')}
                                            </Text> 
                                                < MaterialCommunityIcons 
                                                    name="square-small"
                                                    color='black'
                                                    size={20}
                                                />   
                                            <Text className="ml-4 font-regular text-base text-gray-800">
                                                {(dataDetailsBrother.followers[index]*1000).toLocaleString("pt-BR")}
                                            </Text>    
                                        </ View>
                                    )
                                })
                            }
                            </View>
                        </View>
                    </>
                    :
                    <View className="w-[100vw] h-[40vh] justify-center items-center">
                        <LoadingText /> 
                    </View>
                                      
                }    
            </View>
            
        </ScrollView>
    )
}