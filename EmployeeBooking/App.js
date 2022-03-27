import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from'./screens/HomeScreen'
import CreateBooking from "./screens/CreateBooking";
import SplashScreen from 'react-native-splash-screen'
import { DeviceProvider } from "./DeviceContext";
const Stack=createNativeStackNavigator();

function App(){

   useEffect(()=>{
    SplashScreen.hide();
   },[])





 return(
   <DeviceProvider>
     <NavigationContainer>
         <Stack.Navigator initialRouteName="home"
         screenOptions={{
            headerStyle: {
              backgroundColor: 'darkslateblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
         
         
         >
             <Stack.Screen name="home" component={HomeScreen} options={{
          headerTitleAlign: "center",
          title: 'Bookings',
      }} />
       <Stack.Screen name="createBooking" component={CreateBooking}
        options={{
            headerTitleAlign: "center",
            title: 'Create  Booking',
        }} 
       
       />
         </Stack.Navigator>
</NavigationContainer>
</DeviceProvider>
 )
}
export default App;








// import React from 'react'
// import {  StyleSheet,View } from 'react-native'
// import Booking from './components/Booking'



// function App(){
// return(
    
//         <View style={styles.container}>
    
//            <Booking/>
    
//         </View>

        
//     )
// } 
//     const styles=StyleSheet.create({
//         container:{
//             flex:1,
//             alignItems:'center',
//             justifyContent:'center',
//             backgroundColor:'#b2ebf2'
//         }
//         })
  






// export default App;
