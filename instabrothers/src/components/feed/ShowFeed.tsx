import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { apiGetNews } from "../../lib/axios";
import { LoadingText } from "../loadings/LoadingText";
import { NewsFeed } from "./NewsFeed";

interface News {
    title: string;
    url_news: string;
    image: string;
}

export function ShowFeed() {
    const [news, setNews] = useState<News[] | null >(null)

    function fetchNews() {
        try {
            apiGetNews
            .then((response) => {
                setNews(response.data)
            })
        } catch (err) {
            console.log(`Erro: ${err}`)
            Alert.alert('Ops', 'Erro ao carregar notícias');
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        // Fazer um código na Back que retorna as noticias com os links
        <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 mx-4 pt-60">
            <View className="pb-72">           
                {
                    news ?
                    news.map((newsItem, index) => (
                        <NewsFeed
                        key={`${newsItem.title}-${index}`}
                        title={newsItem.title}
                        url_news={newsItem.url_news}
                        image={newsItem.image}
                        />
                    ))
                    :
                    <View className="h-96 justify-center">
                       <LoadingText 
                        text="Carregando Notícias..."
                        />
                    </View>
                    
                }                
            </View>
        </ScrollView>
    )
}