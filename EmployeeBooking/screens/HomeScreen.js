import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { DeviceContext } from "../DeviceContext";
import { StyleSheet,Text,TouchableOpacity,View, FlatList, Alert} from "react-native";

function HomeScreen({navigation}){
const[EmployeedeviceID,setEmployeeDeviceID]=useContext(DeviceContext)
const [booking,setBooking]=useState([])   

// const {EmployeedeviceID}=route?.params || {};

useEffect(()=>{
    // getBooking();
    fetch(`http://192.168.100.4:4012/find/${EmployeedeviceID}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
      setBooking(data)
        console.log(data);
    })
    .catch(error =>{
    console.log(error)
    Alert.alert("Sorry, something went wrong",error.message,
    [
        {
            text:"Try Again",
        }
    ]
  )
    } )
},[])


// const getBooking = async  () => {
   
//    await fetch(`http://192.168.100.4:4012/find/${EmployeedeviceID}`,{
//       method: 'GET',
//       headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(response => response.json())
//   .then(data => {
//     setBooking(data)
//       console.log(data);
//   })
//   .catch(error =>{
//   console.log(error)
//   Alert.alert("Sorry, something went wrong",error.message,
//   [
//       {
//           text:"Try Again",
//       }
//   ]
// )
//   } )

// } 



const Item = ({destination,AssignmentStatus}) => {
          const color =AssignmentStatus=='Pending' ? "#ff0000" : "#008000"
  

          return(
    <TouchableOpacity  style={{flex:1,marginBottom:8,justifyContent:'center',marginLeft:5  }}>
            
    <Text style={{fontSize:17,marginBottom:15,color:'green'}}>Destination: {destination}</Text> 
    <Text style={{fontSize:13}}>Assignment Status: {AssignmentStatus}</Text> 

              </TouchableOpacity>
              
              
          )
          };
    const renderSeparator =()=>{
        return(
            <View style={{height:1,width:'100%',backgroundColor:'black'}}>
            </View>
        )
    }

    return(
             <View style={styles.container}>
                 
                   <FlatList
                    data={booking}
                    extraData={booking}
                     keyExtractor={(trip)=> trip.id.toString()}
                    renderItem={({item})=>(
                        <Item destination={item.destination} AssignmentStatus={item.AssignmentStatus}/>
                    )}
                     ItemSeparatorComponent={renderSeparator}
                   />
                 <TouchableOpacity style={styles.fab} onPress={()=> navigation.navigate('createBooking')}>
                     <Text style={styles.fabIcon}>+</Text>
                 </TouchableOpacity>
               
             </View>
             
        )
}
const styles=StyleSheet.create({
     container:{
     flex:1,
},
fab:{
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: 'darkslateblue', 
    borderRadius: 100, 
  
    },
    fabIcon: { 
        fontSize: 20, 
        color: 'white' 
      },
    


})
export default HomeScreen