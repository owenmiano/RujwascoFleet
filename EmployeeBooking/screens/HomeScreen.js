import React from "react";
import { StyleSheet,Text,TouchableOpacity,View} from "react-native";

function HomeScreen({navigation}){
    return(
  
             <View style={styles.container}>
                 <Text>Home screen init</Text>
                 <TouchableOpacity style={styles.fab} onPress={()=> navigation.navigate('createBooking')}>
                     <Text style={styles.fabIcon}>+</Text>
                 </TouchableOpacity>
             </View>
        )
}
const styles=StyleSheet.create({
     container:{
     flex:1,
},
fab:{
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: 'darkslateblue', 
    borderRadius: 100, 
    elevation: 8
    },
    fabIcon: { 
        fontSize: 40, 
        color: 'white' 
      }


})
export default HomeScreen