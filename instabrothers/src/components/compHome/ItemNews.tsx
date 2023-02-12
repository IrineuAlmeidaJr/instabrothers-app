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
                activeOpacity={0.5}
                className="justify-center items-center"
                onPress={() => Linking.openURL(news.url_news)}
            >
                <Text
                className="text-white text-lg text-center font-bold"
                >
                    {news.title}
                </Text>
                <Image
                    className="w-full h-40 my-2 bg-white rounded-md"
                    source={{
                        uri: news.image,
                    }}                
                /> 
            </TouchableOpacity>
        </View>
    )
}