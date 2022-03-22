import React from 'react'
import {TouchableOpacity} from 'react-native'
import HomeScreen from './src/components/screens/Home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/screens/login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceProvider } from './src/components/DeviceContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <DeviceProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen name="home" 
        component={HomeScreen}  
         options={{
           headerBackVisible:false,
          headerTitleAlign: "center",
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity>
               <Icon name="menu" size={30} color="black" />
            </TouchableOpacity>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DeviceProvider>
     
  )
}

export default App