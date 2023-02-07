import { Text, View, Image, TouchableOpacity, Linking } from "react-native";

export function NewsFeed() {

    return (
        <View className="bg-orange-300 my-2 px-4 py-2 rounded-md">
            <TouchableOpacity 
                className="flex-row justify-center items-center gap-1"
                onPress={() => Linking.openURL(`https://gshow.globo.com/realities/bbb/bbb-23/jogo-discordia/ao-vivo/bbb-23-acompanhe-o-quarto-jogo-da-discordia.ghtml`)}
            >
                <Text
                className="text-white text-lg text-center font-bold"
                >
                    Brothers distribuem placas no Jogo da Discórdia
                </Text>

            </TouchableOpacity>
           
            <Image
                className="w-full h-40 my-2 bg-white rounded-md"
                source={{
                    uri: "https://s2.glbimg.com/OEiqbXbt0mhZZQ29nl9m3FOcS7w=/0x0:1920x1080/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/S/S/aLr7N9SfyeXPi2zlXKqg/bbb23-070223-003359.jpg",
                }}                
            /> 
        </View>
    )
}