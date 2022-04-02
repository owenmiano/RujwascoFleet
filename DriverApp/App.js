import React,{useEffect} from 'react'
import {TouchableOpacity,Alert} from 'react-native'
import HomeScreen from './src/components/screens/Home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/screens/login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceProvider } from './src/components/DeviceContext';
import SplashScreen from 'react-native-splash-screen'
import Entypo from 'react-native-vector-icons/dist/Entypo'


const Stack = createNativeStackNavigator();

function App() {
  useEffect(()=>{
    SplashScreen.hide();
   },[])


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
            <TouchableOpacity onPress={()=>Alert.alert("Helooo","clicked")}>
               <Entypo name="log-out" size={30} color="black" />
            </TouchableOpacity>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DeviceProvider>
     
  )
}

export default App