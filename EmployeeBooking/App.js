import React from 'react'
import {  StyleSheet,View } from 'react-native'
import Booking from './components/Booking'


const App=()=>{
    return(
        <View style={styles.container}>
    
           <Booking/>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#b2ebf2'
    }
})

export default App;