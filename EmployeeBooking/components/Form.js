import React from "react";
import { View ,TextInput,StyleSheet, TouchableOpacity, Text} from "react-native";
   
const  Form = ()=>{
    return(
        <View style={styles.container}>

          <TextInput style={styles.inputBox}
           placeholderTextColor='#ffffff'

           placeholder="Employee Name"
          />
          <TextInput style={styles.inputBox}
           placeholder="Destination"
           placeholderTextColor='#ffffff'

          />

          <TextInput style={styles.inputBox}
           placeholder="Purpose"
           placeholderTextColor='#ffffff'
          />
           
           <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>SUBMIT</Text>
           </TouchableOpacity>

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