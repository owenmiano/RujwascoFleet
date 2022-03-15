import React,{useState} from 'react'
import { Text, View,TextInput,StyleSheet,} from "react-native";
import COLORS from './Colors'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

           
function Input({label,iconName,password,onFocus=()=>{},error,...props}) {
    const [isFocused,setIsFocused]=useState(false)
  return (
      <View style={{marginBottom:15}}>
          <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer,{
        borderColor: error
         ? COLORS.red
         :isFocused
         ?COLORS.darkBlue
         :COLORS.light
         }
         ]}>
          
      <Icon name={iconName} style={{fontSize:24,color:"black",marginRight:10}}/>   
                        <TextInput 
                        style={{color:COLORS.black,flex:1}}
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
        color:COLORS.black,
 
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