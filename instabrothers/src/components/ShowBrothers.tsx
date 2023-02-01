import { useEffect, useState } from "react";
import { Text, ScrollView, View, Alert} from "react-native";
import { api } from "../lib/axios";
import { Brother } from "./Brother";

type Brother = {
    name: string;
    user_instagram: string;
    followers_before: number;
    followers_current: number;
    url_img: string;
}

type BrotherApi = {       
    followers: number; 
    instagram_username: string;
    name: string;
    url_image: string;
}

export function ShowBrothers() {
    const [brothers, setBrothers] = useState<BrotherApi[]>([])
    const [initialsFollowers, setInitialsFollowers] = useState<number[]>([])

    function fetchData() {
        try {
            api.get("/brothers")
            .then(response => {
                setBrothers(response.data.brothers)
                setInitialsFollowers(response.data.followers_before)
                //console.log(response.data)
            })
            
        } catch (error) {
            Alert.alert('Ops', 'Erro ao carregar os perfils dos brothers');
        }
    } 

    useEffect(() => {
        fetchData();
    }, []);

    const brothersLocal: Brother[] = [
        { 
            name: 'Gabriel', 
            user_instagram: '@gabriel', 
            followers_before: 120000,
            followers_current: 542791,
            url_img: 'https://s2.glbimg.com/runqsEy54iPoXMQ8qkLRe7WQSPY=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/R/i/ar31rfRe6EGls4fhYOBg/gabriel-foto-330-270-bbb23.png'
        },
        { 
            name: 'Bruna Griphao', 
            user_instagram: '@brunagriphao', 
            followers_before: 990000,
            followers_current: 3670505,
            url_img: 'https://s2.glbimg.com/TCP9ZDJu95vsCDXaaDXfJl_nbMw=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/x/Q/booSm0TKGKCbOAp2hnSg/bruna-griphao-foto-330-270-bbb23.png'
        },
        { 
            name: 'Fred Nicácio', 
            user_instagram: '@frednicacio', 
            followers_before: 220000,
            followers_current: 582432,
            url_img: 'https://s2.glbimg.com/Oq-kfI9lD9Qd1pn75esr4SlJdEw=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/s/9/Mdb40BTGAJsJ9fuoRvrg/nicacio-foto-330-270-bbb23.png'
        },
        { 
            name: 'Key Alves', 
            user_instagram: '@keyalves', 
            followers_before: 900000,
            followers_current: 7694020,
            url_img: 'https://s2.glbimg.com/zTwsn2Og1mYqvm7_iGAkOaa6HB0=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/s/q/MBFLD6RFaAjPs0vK1TBQ/key-alves-foto-330-270-bbb23.png'
        },
        { 
            name: 'Bruno', 
            user_instagram: '@brunornogueira', 
            followers_before: 70000,
            followers_current: 161498,
            url_img: 'https://s2.glbimg.com/hb1e_t0vJU09PCDH2u4_TuxapYY=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/p/M/FaP5NrR6it8n3nSQlD4Q/gustavo-foto-330-270-bbb23.png'
        },
        { 
            name: 'MC Guimê', 
            user_instagram: '@mcguime', 
            followers_before: 2000000,
            followers_current: 8620432,
            url_img: 'https://s2.glbimg.com/_d7OBvTEilzCgRAyQW8rTA3JyP4=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/j/w/07Dl8YRKKoyboVMwXrJw/mc-guime-foto-330-270-bbb23.png'
        },

    ];

    return (

        <ScrollView 
            showsVerticalScrollIndicator={false}
            className="mt-4 mb-8 px-4 bg-blue-400  rounded-xl"
        >
            <View  className="flex-row flex-wrap justify-center items-center">
                {
                    brothers.map((brother, index) => {
                        return(
                            <Brother 
                                key={index} 
                                name={brother.name} 
                                user_instagram={brother.instagram_username}
                                followers_before={initialsFollowers[index]}
                                followers_current={brother.followers}
                                url_img={brother.url_image}
                                isDetailsBrother={true}
                            />
                        )
                    })
                }
                
            </View>
        </ScrollView>
    )
}