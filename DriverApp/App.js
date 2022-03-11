import React from 'react'
import HomeScreen from './src/components/screens/Home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/screens/login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
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
     
  )
}

export default App