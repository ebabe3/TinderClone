import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './pages/ChatScreen';
import Login from './pages/LoginScreen';
import Dashboard from './pages/DashboardScreen';
import Match from './pages/MatchScreen';




const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={() => {
                        return {
                          headerShown: false,
                        };
                      }}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}         
                    options={() => {
                        return {
                          headerShown: false,
                        };
                      }}       
                />
                <Stack.Screen 
                    name="Chat"
                    component={Chat}   
                    options={() => {
                        return {
                          headerShown: false,
                        };
                      }}             
                />
                <Stack.Screen 
                    name="Match"
                    component={Match}   
                    options={() => {
                        return {
                          headerShown: false,
                        };
                      }}             
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;