import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from './colors'
function Input({label,iconName,password,onFocus=()=>{},error,...props}) {
    const [isFocused,setIsFocused]=useState(false)
    const [hidePassword,setHidePassword]=useState(password)
  return (
    <View style={{marginBottom:15}}>
        <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer,{
        borderColor: error
         ? COLORS.red
         :isFocused
         ?COLORS.darkBlue
         :COLORS.light
         }]}>
              <AntDesign name={iconName} style={{fontSize:22,color:"black",marginRight:10}}/>   
              <TextInput 
               secureTextEntry={hidePassword}
               style={{color:COLORS.light,flex:1}}
               autoCorrect={false}
               onFocus={()=>{
                  onFocus();
                  setIsFocused(true) 
               }}
               onBlur={()=>{
                 setIsFocused(false)
               }}
               {...props}
              />
              <Icon 
              name={hidePassword ?'eye-outline':'eye-off-outline'} 
              style={{fontSize:22,color:COLORS.darkBlue}}
              onPress={()=>setHidePassword(!hidePassword)}
              />
        </View>
        {error && (
        <Text style={{color:COLORS.red,fontSize:12,marginTop:7}}>{error}</Text>
        )}
    </View>
  )
}
const styles=StyleSheet.create({
    label:{
        marginVertical:5,
        fontSize:14,
        color:COLORS.grey
    },
    inputContainer:{
       height:55,
       backgroundColor:COLORS.light,
       flexDirection:'row',
       paddingHorizontal:10,
       borderWidth:0.5,
       alignItems:"center"
    }
})

export default Input