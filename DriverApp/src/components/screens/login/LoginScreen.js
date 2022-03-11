import React from 'react'
import {Text,View,SafeAreaView,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import styles from './style'
import Input from '../../Input'
function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
         <KeyboardAvoidingView>
            <View style={{paddingTop:50,paddingHorizontal:20}}>
                <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>DRIVER LOGIN</Text>
                <Text style={{color:'gray',fontWeight:'bold',fontSize:16,marginVertical:10}}>Enter Your Details To Login</Text>
           
            <View style={{marginVertical:20}}>
                <Input 
                label="WorkerID"
                iconName="user"
                placeholder="Enter your Worker ID"
                password
                error="Input worker ID"
                />
             
            </View>
            </View>
         </KeyboardAvoidingView>
</SafeAreaView>
  )
}

export default LoginScreen