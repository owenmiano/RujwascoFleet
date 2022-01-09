import React from 'react'
import { Image, StyleSheet,Text,View } from 'react-native'
import Form from './Form'
import LogoSection from './LogoSection'


const Booking=()=>{
    return(
        <View style={styles.container}>
             <LogoSection/>
             <Form/>
           <View style={styles.bottomTextCont}>
               <Text style={styles.bottomText}>Await to be assigned a vehicle</Text>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#b2ebf2'
    },
    bottomTextCont:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingVertical:16
    },
    bottomText:{
        color:'#ffffff',
        fontSize:14
    }
})

export default Booking;