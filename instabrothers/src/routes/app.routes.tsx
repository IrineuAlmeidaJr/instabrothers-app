import {createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator(); 

import { Home } from '../screens/Home'
import { DetailsBrother } from '../screens/DetailsBrother';
import { RankingBrothers } from '../screens/RankingBrothers'
import { Feed } from '../screens/Feed';

export function AppRoutes(){
    return (        
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="home" >                
            <Screen
                name="home"
                component={Home}
            />           

            <Screen
                name="detailsbrother"
                component={DetailsBrother}
            />

            <Screen
                name="rankingbrothers"
                component={RankingBrothers}
            />

            <Screen
                name="feed"
                component={Feed}
            />
        </Navigator>
    );
}