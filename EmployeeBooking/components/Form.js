import React, { useState } from "react";
import { View ,TextInput,StyleSheet, TouchableOpacity, Text,Alert} from "react-native";
 import axios, { Axios } from "axios";  
const  Form = ()=>{
     const[EmployeeName,setEmployeeName]=useState('');
     const[destination,setDestination]=useState('');
     const[purpose,setPurpose]=useState('')
     const[isPending,setIsPending]=useState(false)
     
     handleSubmit=(e)=>{
         e.preventDefault();
       
         setIsPending(true);

         const Bookings={
             EmployeeName,
            destination,
            purpose
        };
        const data=JSON.stringify(Bookings)
        console.log(data)
     
         axios.post('http://192.168.100.3:4012/addBooking',data, {headers: {
            'Content-Type': 'application/json',
            Accept:'application/json'
        }})
         .then(()=>{
            setIsPending(false)
            Alert.alert(
             "Booking Status",
             "SUCCESSFUL!!",
             [
                 { text: "OK" }
             ]
           );
          }).catch(error => console.error(error));
      
     }


    return(
        <View style={styles.container}>

          <TextInput style={styles.inputBox}
           placeholderTextColor='#ffffff'
         

           onChangeText={setEmployeeName}
           placeholder="Employee Name"
          
          />
          <TextInput style={styles.inputBox}
           placeholder="Destination"
           placeholderTextColor='#ffffff'
           autoCapitalize="none"
         

           onChangeText={setDestination}
          />

          <TextInput style={styles.inputBox}
           placeholder="Purpose"
           placeholderTextColor='#ffffff'
         
           onChangeText={setPurpose}
          />
           
         { !isPending && <TouchableOpacity style={styles.button} onPress={handleSubmit}>
               <Text style={styles.buttonText}>SUBMIT</Text>
           </TouchableOpacity>}
           { isPending && <TouchableOpacity disabled style={styles.button} onPress={handleSubmit}>
               <Text style={styles.buttonText}>Submitting...</Text>
           </TouchableOpacity>}

      </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputBox:{
        width:300,
        marginVertical:10,
        borderRadius:25,
        paddingHorizontal:15,
        fontSize:16,
        backgroundColor:'darkslateblue'
    },
    button:{
       width:200,
       backgroundColor:'darkslateblue',
       marginVertical:10,
       borderRadius:25,
       paddingVertical:12,
       
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
})
export default Form;