import React from 'react'
// import {  StyleSheet,View } from 'react-native'
// import Booking from './components/Booking'
import NavigationContainer from '@react-navigation/native';
import createNativeStackNavigator   from '@react-navigation/native-stack'
import { Text, View } from 'react-native';

const Stack=createNativeStackNavigator()

function HomeScreen(){
    return(
    <View>
        <Text>Home screen</Text>
    </View>
    )
}
function CreateBooking(){
    return(
    <View>
        <Text>Create Booking screen</Text>
    </View>
    )
}



function App(){
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">

            <Stack.Screen name="home" component={HomeScreen}  options={{ title: 'Your Bookings' }}/>
            <Stack.Screen name="bookings" component={CreateBooking}  options={{ title: 'Create Booking' }}/>
        </Stack.Navigator>
 </NavigationContainer>
)



}

export default App;