import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Headerr=(props)=>{
   return(
     <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
     </View>
   )
}
const styles=StyleSheet.create({
  header:{
      height:60,
      padding:15,
      backgroundColor:'darkslateblue'
  },
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize:20
  }
})
 export default Headerr;