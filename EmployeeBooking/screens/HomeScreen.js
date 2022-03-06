import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { DeviceContext } from "../DeviceContext";
import { StyleSheet,Text,TouchableOpacity,View,TextInput, FlatList, Alert,Modal,Dimensions,Platform} from "react-native";

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;



function HomeScreen({navigation}){
    const{value,value2}=useContext(DeviceContext)
const[EmployeedeviceID,setEmployeeDeviceID]=value;
const [booking,setBooking]=value2;

// const {EmployeedeviceID}=route?.params || {};

useEffect(()=>{
   getAllBooking() 
},[booking])

const getAllBooking=()=>{
    axios.get(`http://192.168.100.3:4012/find/${EmployeedeviceID}`,{
  
  })
  .then(response => {
      const result=response.data
      setBooking(result)
    //   console.log(result);
    }).catch(error =>{
          console.log(error)
    })
}



const Item = ({destination,AssignmentStatus,EmployeeName}) => {
         
  

          return(
    <TouchableOpacity  
    style={{flex:1,marginBottom:8,justifyContent:'center',marginLeft:5 }}
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
            
    <Text style={{fontSize:17,marginBottom:15,color:'black'}}>Destination: {destination}</Text> 
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:13,color:'black',marginRight:5}}>Status:</Text> 
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
                     keyExtractor={(trip)=> trip.id.toString()}
                    renderItem={({item})=>(
                        <Item id={item.id}
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
                 <View style={{justifyContent:'center',alignItems:'center',flex:0.7,}}>
                     <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>You have no bookings!!</Text>
                 </View>
                 )
                 }


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
    
modalCloseButton:{
    marginTop:70,
     padding:8,
     marginLeft:70,
     marginRight:90,
     height:40,
     borderRadius:6,
     backgroundColor:'darkslateblue'
},
pending:{
    color:"#ff0000"
},
assigned:{
    color:"#008000"
},

modalView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
modal:{
    height:HEIGHT/2,
     width:WIDTH-20,
     paddingTop:10,
     backgroundColor:'white',
    
},
    


})
export default HomeScreen