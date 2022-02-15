import React,{useEffect,useState} from "react";
import { Text, View,TextInput,TouchableOpacity,Alert,StyleSheet, ScrollView } from "react-native";
import DeviceInfo from 'react-native-device-info'
import axios from "axios";  
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

function CreateBooking({navigation}){
    const[EmployeeName,setEmployeeName]=useState('');
    const[destination,setDestination]=useState('');
    const[purpose,setPurpose]=useState('')
    const[isPending,setIsPending]=useState(false)
    const[EmployeedeviceID,setEmployeeDeviceID]=useState('');


    useEffect(() => {
        setEmployeeDeviceID(DeviceInfo.getUniqueId)
})

   handleSubmit=(e)=>{

         e.preventDefault();
         setIsPending(true);
         
           

         

         const Bookings={
            EmployeedeviceID,
             EmployeeName,
            destination,
            purpose,
        
            };

        const data=JSON.stringify(Bookings)
        console.log(data)
     
         axios.post('http://192.168.100.5:4012/addBooking',data, {headers: {
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
           navigation.navigate('home')
          }).catch(error =>{
           console.log(error);
           setIsPending(false)
           Alert.alert("Sorry, something went wrong",error.message,
                 [
                     {
                         text:"Try Again",
                     }
                 ]
           )
                 } )
           
     }
    return(
        <KeyboardAvoidingView>
            <ScrollView>
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
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center'
    },
    inputBox:{
        width:300,
        // marginTop:25,
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


export default CreateBooking;