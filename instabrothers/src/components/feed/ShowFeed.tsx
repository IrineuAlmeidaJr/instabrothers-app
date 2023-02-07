import { ScrollView, View } from "react-native";
import { NewsFeed } from "./NewsFeed";

export function ShowFeed() {

    return (
        // Fazer um código na Back que retorna as noticias com os links
        <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 mx-4 ">
            <View className="pb-16">           
                {/* Tera um Map com as noticias aqui. Reperti só para teste */}
                <NewsFeed />
                <NewsFeed />
                <NewsFeed />
                <NewsFeed />
                <NewsFeed />
            </View>
        </ScrollView>
    )
}