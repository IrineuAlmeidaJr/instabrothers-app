import { ScrollView, View } from "react-native";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

export function LineChart() {

    // Fazer FetchData AQUI

    return (
        <ScrollView
            className="mt-2 bg-white w-full"
            showsVerticalScrollIndicator={false} 
        >
            <View 
                className="mt-2 bg-white rounded-lg w-[92%]"
            >
                <VictoryChart                      
                    theme={VictoryTheme.material}                    
                >
                <VictoryLine 
                    style={{                
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #FFF"}
                    }}
                    data={[
                    { x: 1, y: 252 },
                    { x: 2, y: 400 },
                    { x: 3, y: 700 },
                    { x: 4, y: 790 },                        
                    { x: 5, y: 810 },
                    { x: 6, y: 890 },
                    { x: 7, y: 1000 },
                    { x: 8, y: 950 },
                    { x: 9, y: 1100 },
                    { x: 10, y: 1120 },
                    { x: 11, y: 1150 },
                    { x: 12, y: 1150 },
                    { x: 13, y: 1200 },
                    { x: 14, y: 1220 },
                    { x: 15, y: 1250 },
                    { x: 16, y: 1275 },
                    { x: 17, y: 1277 },
                    { x: 18, y: 1279 },
                    { x: 19, y: 1290 },
                    { x: 20, y: 1310 }
                    ]}
                    animate={{
                        duration: 4000,
                        onLoad: { duration: 2000 }
                    }}
                />
                </VictoryChart>                        
            </View>
            
        </ScrollView>
    )
}