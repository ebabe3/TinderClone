import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/dashboard';
import Clickme from './pages/clickme';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                />
                <Stack.Screen
                name="Clickme"
                component={Clickme}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;