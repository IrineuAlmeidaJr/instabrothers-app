import { Text, View, Image, TouchableOpacity, Linking } from "react-native";

interface NewsProps {
    title: string;
    url_news: string;
    image: string;
}

export function ItemNews(news: NewsProps) {

    return (
        <View className="bg-orange-300 my-3 px-4 py-2 rounded-md">
            <TouchableOpacity 
                className="flex-row justify-center items-center gap-1"
                onPress={() => Linking.openURL(news.url_news)}
            >
                <Text
                className="text-white text-lg text-center font-bold"
                >
                    {news.title}
                </Text>

            </TouchableOpacity>
           
            <Image
                className="w-full h-56 my-2 bg-white rounded-md"
                source={{
                    uri: news.image,
                }}                
            /> 
        </View>
    )
}