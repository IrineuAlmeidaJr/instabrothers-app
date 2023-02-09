import {createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator(); 

import { AllBrothers } from '../screens/AllBrothers'
import { DetailsBrother } from '../screens/DetailsBrother';
import { RankingBrothers } from '../screens/RankingBrothers'
import { Home } from '../screens/Home';
import { DetailsBrotherInFeed } from '../screens/DatailsBrotherInFeed';

export function AppRoutes(){
    return (        
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="home" >    
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="allbrothers"
                component={AllBrothers}
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
                name="detailsbrotherinfeed"
                component={DetailsBrotherInFeed}
            />
        </Navigator>
    );
}