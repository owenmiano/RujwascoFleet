import React ,{useState,useContext}from 'react'
import {Text,View,SafeAreaView,Alert,TouchableOpacity,KeyboardAvoidingView,Keyboard} from 'react-native'
import styles from './style'
import Input from '../../Input'
import COLORS from '../../colors'
import {DeviceContext} from '../../DeviceContext'

function LoginScreen({navigation}) {
   const {value}=useContext(DeviceContext)
   const [workerID,setWorkerID]=useState('')
   const [errors,setErrors]=useState()
   const[netInfo,setNetInfo] =useState('');
  
const handleError=(errorMessage)=>{
   setErrors(errorMessage)
}


const validate=()=>{
  Keyboard.dismiss()
    if(!workerID){
      handleError('This field cannot be empty')
  } else if(!netInfo){
    Alert.alert("You are Offline!","Please Connect To the Internet",
    [
      {
          text:"Try Again",
      }
  ]
    )
  }
}


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
         <KeyboardAvoidingView>
            <View style={{paddingTop:50,paddingHorizontal:20}}>
                <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:18}}>DRIVER LOGIN</Text>
                <Text style={{color:COLORS.light,fontWeight:'bold',fontSize:16,marginVertical:10}}>Enter Your Details To Login</Text>
           
            <View style={{marginVertical:20}}>
                <Input 
                value={workerID}
                label="WorkerID"
                keyboardType="numeric"
                iconName="account-outline"
                placeholder="Enter your Worker ID"
                password
                error={errors}
                onFocus={()=>{
                    handleError(null)
                }}
                onChangeText={(value)=>setWorkerID(value)}
                />
                <TouchableOpacity style={{
                  height:50,
                  width:'100%',
                  backgroundColor:COLORS.blue,
                  justifyContent:'center',
                  alignItems:'center'
                 }}
                 onPress={validate}
                 >
                 <Text style={{color:COLORS.white,fontSize:16,fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
         </KeyboardAvoidingView>
</SafeAreaView>
  )
}

export default LoginScreen