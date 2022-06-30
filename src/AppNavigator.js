import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './pages/ChatScreen';
import Login from './pages/LoginScreen';
import Dashboard from './pages/DashboardScreen';




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
                    name="Login"
                    component={Login}                
                />
                <Stack.Screen 
                    name="Chat"
                    component={Chat}                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;