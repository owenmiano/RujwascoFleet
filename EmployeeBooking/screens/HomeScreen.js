import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { DeviceContext } from "../DeviceContext";
import NetInfo from '@react-native-community/netinfo';
import { scale, ScaledSheet } from 'react-native-size-matters';

import { StyleSheet,Text,TouchableOpacity,View,TextInput, FlatList, Alert,Modal,Dimensions,Platform} from "react-native";

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;



function HomeScreen({navigation}){
    const{value,value2,value3}=useContext(DeviceContext)
const[EmployeedeviceID,setEmployeeDeviceID]=value;
const [booking,setBooking]=value2;
const[netInfo,setNetInfo]=value3

useEffect(()=>{
   
  getAllBooking()
     
},[]);

const getAllBooking=()=>{
   
           
axios.get(`http://192.168.100.5:4012/find/${EmployeedeviceID}`,{
     
})
.then(response => {
    const result=response.data
    setBooking(result)
  //   console.log(result);
  }).catch(error =>{
        console.log(error)
  })
}




// NetInfo.fetch().then((state) => {
//     {state.isConnected ? 
//       getAllBooking=()=>{
//         axios.get(`http://192.168.100.5:4012/find/${EmployeedeviceID}`,{
     
//      })
//      .then(response => {
//          const result=response.data
//          setBooking(result)
//        //   console.log(result);
//        }).catch(error =>{
//              console.log(error)
//        })
//       }
//        :
//        (
//         <View style={{justifyContent:'center',alignItems:'center',flex:0.7,}}>
//         <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>waiting for internet connection!!</Text>
//     </View>
//        )
   

//     }
//     // console.log(state.isConnected)

// })





const Item = ({destination,AssignmentStatus,EmployeeName}) => {
         
  

          return(
    <TouchableOpacity  
    style={{flex:scale(1),marginBottom:scale(8),justifyContent:'center',marginLeft:scale(5) }}
    onPress={()=>{
        {AssignmentStatus =='Pending' ? Alert.alert(
            `Destination: ${destination}`,
         `${EmployeeName},your booking request to ${destination} has not yet been approved.Kindly Wait`,
         [
             { text: "OK" }
         ]
       ): Alert.alert(
        `Destination: ${destination}`,
     `${EmployeeName},your booking request to ${destination} has been approved.You have been assigned vehicle: Toyota Hilux,RegNo: KCT 940S and your driver is David Thuo Mwangi.`,
     [
         { text: "OK" }
     ]
   )}
       
    }}
    >
            
    <Text style={{fontSize:scale(17),marginBottom:scale(15),color:'black'}}>Destination: {destination}</Text> 
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:scale(13),color:'black',marginRight:scale(5)}}>Status:</Text> 
            <Text style={AssignmentStatus=='Pending' ? styles.pending : styles.assigned}>
                {AssignmentStatus}
            </Text>
        </View>
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
                {booking.length >0 ?(
                   <FlatList
                    data={booking}
                    extraData={booking}
                     keyExtractor={item=> String(item.id)}
                    renderItem={({item})=>(
                        <Item 
                        key={item.id}
                        destination={item.destination}
                        AssignmentStatus={item.AssignmentStatus}
                        driver={item.driverId}
                        EmployeeName={item.EmployeeName}
                        
                        
                        />
                        
                    )}
                     ItemSeparatorComponent={renderSeparator}
                   />
                 ):
                 (
                 <View style={{justifyContent:'center',alignItems:'center',flex:scale(0.7)}}>
                     <Text style={{color:'black',fontWeight:'bold',fontSize:scale(16)}}>You have no bookings!!</Text>
                 </View>
                 )
                 }


                 <TouchableOpacity style={styles.fab} onPress={()=> navigation.navigate('createBooking')}>
                     <Text style={styles.fabIcon}>+</Text>
                 </TouchableOpacity>
               
             </View>
             
        )
}
const styles=ScaledSheet.create({
     container:{
     flex:1,
},
fab:{
    position: 'absolute', 
    width: '56@s', 
    height: '56@s', 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: '20@s', 
    bottom: '20@s', 
    backgroundColor: 'darkslateblue', 
    borderRadius: '100@s', 
  
    },
    fabIcon: { 
        fontSize: '20@s', 
        color: 'white' 
      },
    

pending:{
    color:"#ff0000"
},
assigned:{
    color:"#008000"
},




})
export default HomeScreen