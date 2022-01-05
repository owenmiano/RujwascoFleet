import React from "react";
import { StyleSheet,TextInput,View,Button,Text } from "react-native";


const NewBooking=()=>{
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Employee Name</Text>  
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Employee Name</Text>  
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Employee Name</Text>  
        <TextInput style={styles.input}/>


      </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    label:{
        padding:20
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    submitButton:{
        backgroundColor:'#DDDDDD'
    }
})
export default NewBooking;