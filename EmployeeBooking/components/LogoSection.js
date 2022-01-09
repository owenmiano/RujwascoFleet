import React from 'react'
import { Image, StyleSheet,View,Text } from 'react-native'


const LogoSection=()=>{
    return(
        <View style={styles.container}>
           <Image
           style={{width:80,height:80}}
           source={require('./images/logo.png')}
           />
           <Text style={styles.logoText}>BOOK VEHICLE</Text>
           

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    logoText:{
        fontSize:18,
        color:'darkslateblue',
        marginVertical:15
    }
})

export default LogoSection;