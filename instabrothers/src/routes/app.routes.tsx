import {createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator(); 

import { Home } from '../screens/Home'
import { AllBrothersFollower } from '../screens/AllBrotherFollower'
import { DetailsBrother } from '../screens/DetailsBrother';

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
                name="allbrothersfollower"
                component={AllBrothersFollower}
            />
        </Navigator>
    );
}