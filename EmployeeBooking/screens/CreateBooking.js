import React,{useState,useContext} from "react";
import { Text, View,TextInput,TouchableOpacity,Alert,StyleSheet, ScrollView,StatusBar } from "react-native";
import axios from "axios";  
import { DeviceContext } from "../DeviceContext";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

function CreateBooking({navigation}){
    
    const[EmployeeName,setEmployeeName]=useState('');
    const[destination,setDestination]=useState('');
    const[purpose,setPurpose]=useState('')
    const[isPending,setIsPending]=useState(false)
    const[EmployeedeviceID,setEmployeeDeviceID]=useContext(DeviceContext);
    // const [booking,setBooking]=useContext(DeviceContext);

  

   const handleSubmit=(e)=>{

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
     
         axios.post('http://192.168.100.4:4012/addBooking',data, {headers: {
            'Content-Type': 'application/json',
            Accept:'application/json'
        }})
         .then(()=>{
     
            //  Bookings(null)
            setIsPending(false)

            Alert.alert(
             "Booking Status",
             "SUCCESSFUL!!",
             [
                 { text: "OK" }
             ]
           );
           setTimeout(() => {
            navigation.navigate('home',{EmployeedeviceID})   
             }, 2000); 
          
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
         

           onChangeText={(val)=>setEmployeeName(val)}
           placeholder="Employee Name"
          
          />
          <TextInput style={styles.inputBox}
           placeholder="Destination"
           placeholderTextColor='#ffffff'
         

           onChangeText={(val)=>setDestination(val.toLowerCase())}
          />

          <TextInput style={styles.inputBox}
           placeholder="Purpose"
           placeholderTextColor='#ffffff'
           multiline
           onChangeText={(val)=>setPurpose(val)}
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
        marginTop: StatusBar.currentHeight || 0,

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