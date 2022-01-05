import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import NewBooking from "./components/NewBooking";


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
             
  
  <TouchableOpacity 
  style={styles.touchable}
  onPress={()=>navigation.navigate('New Booking')}
  >
       <Text style={styles.floatingButton}>+</Text>
  </TouchableOpacity>
  
</View>

  )}

function createBooking(){
  return(
       <NewBooking/>
    )
}




export default function App(){
  return(
   
    <NavigationContainer>
       <Stack.Navigator initialRouteName="All Bookings">
        <Stack.Screen
          options={{
            title: 'All Bookings',
            headerStyle: {
              backgroundColor: 'darkslateblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="All Bookings"
          component={HomeScreen}
        />
        <Stack.Screen
         name="New Booking" 
        component={createBooking} 
        options={{
          title: 'Create Booking',
          headerStyle: {
            backgroundColor: 'darkslateblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
      container:{
        flex:1
      },
        touchable:{
         position:'absolute',
         width:55,
         height:55,
         alignItems:'center',
         justifyContent:'center',
         right:30,
         bottom:30,
         backgroundColor: '#03A9F4', 
    borderRadius: 100,
    elevation: 10

       },
       floatingButton:{
        fontSize: 35, 
        color: 'white'
       }
})