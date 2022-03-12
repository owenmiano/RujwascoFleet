import React from 'react'
import HomeScreen from './src/components/screens/Home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/screens/login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceProvider } from './src/components/DeviceContext';

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
        <Stack.Screen name="home" component={HomeScreen}   options={{
          headerTitleAlign: "center",
          title: 'Home',
          headerBackVisible:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DeviceProvider>
     
  )
}

export default App