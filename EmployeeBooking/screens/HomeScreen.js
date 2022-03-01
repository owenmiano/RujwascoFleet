import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { DeviceContext } from "../DeviceContext";
import { StyleSheet,Text,TouchableOpacity,View, FlatList, Alert,Modal,Dimensions} from "react-native";

const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=280;



function HomeScreen({navigation}){
const[EmployeedeviceID,setEmployeeDeviceID]=useContext(DeviceContext)
const [booking,setBooking]=useState(DeviceContext)   
const [isModalVisible,setisModalVisible]=useState(false)

// const {EmployeedeviceID}=route?.params || {};

useEffect(()=>{
    axios.get(`http://192.168.100.4:4012/find/${EmployeedeviceID}`,{
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      const result=response.data
      setBooking(result)
      console.log(result);
    }).catch(error =>{
          console.log(error)
    })




 
   },[])

   const onPressDestination=()=>{
       setisModalVisible(true)
   }



const Item = ({destination,AssignmentStatus}) => {
          const color =AssignmentStatus=='Pending' ? "#ff0000" : "#008000"
  

          return(
    <TouchableOpacity  
    style={{flex:1,marginBottom:8,justifyContent:'center',marginLeft:5 }}
    onPress={()=>onPressDestination()}
    >
            
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
                        <Item id={item.id}destination={item.destination} AssignmentStatus={item.AssignmentStatus}/>
                    )}
                     ItemSeparatorComponent={renderSeparator}
                   />
                   <Modal 
                   transparent={true}
                   animationType='fade'
                   visible={isModalVisible}
                //    onRequestClose={()=>setisModalVisible(false)}
                   >
                       <View style={styles.modalView}>
                       <View style={styles.modal}>
                           <View style={styles.textView}>
                         <Text style={styles.modalText}>Driver Name: Owen Miano Kabugi</Text>
                         
                         <Text style={styles.modalText}>Vehicle Name: Toyota Hilux single Cab</Text>
                         <Text style={styles.modalText}>Vehicle Reg No: KCT 940S</Text>
                         </View>
                         <View>
                              <TouchableOpacity style={styles.modalCloseButton} onPress={()=>setisModalVisible(false)}>
                                 <Text>Close</Text>
                              </TouchableOpacity>
                         </View>
                       </View>
                       </View>
                   </Modal>
             



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
      modalView:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      modal:{
          height:HEIGHT_MODAL,
           width:WIDTH-80,
           paddingTop:10,
           backgroundColor:'white',
           borderRadius:10,
},
textView:{
    flex:1,
    alignItems:'center'
},
modalText:{
    margin:5,
    fontSize:16,
    fontWeight:'bold'
},
modalCloseButton:{
    
    alignItems:'center'
}
    


})
export default HomeScreen