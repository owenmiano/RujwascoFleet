import React,{useState,useContext} from "react";
import { Text, View,TextInput,Platform,TouchableOpacity,Keyboard,Alert,StyleSheet, ScrollView,StatusBar } from "react-native";
import axios from "axios";  
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { DeviceContext } from "../DeviceContext";
import Input from "../components/Input";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../components/Colors";

function CreateBooking({navigation}){
    const [errors,setErrors]=useState({})

    const[EmployeeName,setEmployeeName]=useState('');
    const[destination,setDestination]=useState('');
    const[purpose,setPurpose]=useState('')
    const[isPending,setIsPending]=useState(false)
    const {value,value2,value3}=useContext(DeviceContext);
    const [netInfo,setNetInfo]=value3
    const[EmployeedeviceID,setEmployeeDeviceID]=value
    const [booking,setBooking]=value2;

    const handleError=(errorMessage,input)=>{
        setErrors(prevState=>({...prevState,[input]: errorMessage}))
     }

   const handleSubmit=(e)=>{

         e.preventDefault();
         setIsPending(true);
         Keyboard.dismiss()
         if(!EmployeeName)
         {
            setIsPending(false)
            handleError("This field cannot be empty",'EmployeeName')
         }else if(!destination)
         {
            setIsPending(false)
            handleError("This field cannot be empty",'destination')

         }else if(!purpose)
         {
            setIsPending(false)
            handleError("This field cannot be empty",'purpose')
         }else if(!netInfo){
            setIsPending(false)

            Alert.alert("You are Offline!","Oops! Looks like your device is not connected to the Internet.",
            [
              {
                  text:"Try Again",
              }
          ]
            )
         }
         else
         {
          //all your API here
         

         

         const Bookings={
            EmployeedeviceID,
             EmployeeName,
            destination,
            purpose,
        
            };

        const data=JSON.stringify(Bookings)
        console.log(data)
     try{
      axios.post('http://192.168.100.2:4012/addBooking',data, {headers: {
            'Content-Type': 'application/json',
            Accept:'application/json'
        }})
         .then(()=>{
            // setBooking([...booking,data])
             setBooking(prevBooking => [...prevBooking, Bookings])
            setIsPending(false)

            Alert.alert(
             "Booking Status",
             "SUCCESSFUL!!",
             [
                 { text: "OK" }
             ]
           );
           setTimeout(() => {
            navigation.navigate('home')   
             }, 2000); 
          
          })
        }catch(error){
           console.log(error);
           setIsPending(false)
           Alert.alert("Sorry, something went wrong",error.message,
                 [
                     {
                         text:"Try Again",
                     }
                 ]
           )
                }}
                
           
     }
    return(
        <KeyboardAvoidingView
        // style={{flex:1}}
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        > 
       
       
           
      
            <ScrollView
            contentContainerStyle={{

                //  marginTop: StatusBar.currentHeight || 0,
                paddingHorizontal:20
            }}
            >
       
        <View style={{marginVertical:10}}>
           <Input
        //    value={EmployeeName}
           label="Employee Name"
           iconName="account-outline"
           placeholder="Enter Employee Name"
           error={errors.EmployeeName}
           onFocus={()=>{
            handleError(null,'EmployeeName')
        }}
           onChangeText={(value)=>setEmployeeName(value)}
           />
            <Input
        //    value={destination}
           label="Destination"
           iconName="map-marker-radius-outline"
           placeholder="Where are you going?"
           error={errors.destination}
           onFocus={()=>{
            handleError(null,'destination')
        }}
           onChangeText={(value)=>setDestination(value.toLowerCase())}
           />
           <Input
           multiline
        //    value={purpose}
           label="Purpose"
           iconName="clipboard-list-outline"
           placeholder="Whats Your Purpose"
           error={errors.purpose}
           onFocus={()=>{
            handleError(null,'purpose')
        }}
           onChangeText={(value)=>setPurpose(value)}
           />




             
           
         { !isPending && <TouchableOpacity 
          onPress={handleSubmit}
          style={styles.submitButton}
          >
               <Text style={styles.submitButtonText}>SUBMIT</Text>
           </TouchableOpacity>}
           { isPending && <TouchableOpacity disabled 
           onPress={handleSubmit}
           style={styles.submitButton}
           >
               <Text style={styles.submitButtonText}>Submitting...</Text>
           </TouchableOpacity>}
</View>

        </ScrollView>
       
    
        </KeyboardAvoidingView>

 
    )
}
const styles=StyleSheet.create({
   submitButton:{
        height:50,
        width:'100%',
        backgroundColor:COLORS.darkslateblue,
        justifyContent:'center',
        alignItems:'center'
   
   },
   submitButtonText:{
    color:COLORS.white,
    fontSize:16,
    fontWeight:'bold' 
   }
})


export default CreateBooking;
