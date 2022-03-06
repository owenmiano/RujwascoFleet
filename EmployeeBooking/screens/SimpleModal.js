import React from 'react'
<Modal 
transparent={true}
position='center'
animationType='fade'
visible={isModalVisible}
//    onRequestClose={()=>setisModalVisible(false)}
  style={{
     //  justifyContent:'center',
     //  borderRadius: Platform.OS ==='ios'? 30:0,
     //  shadowRadius:10,
     //  height:200,
     //  width:WIDTH-20,
  }}
>
                         
     <View style={styles.modalView}>
     <View style={styles.modal}>
            <Text
            style={{
                fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:5
            }}
            >
                Booking info
            </Text>
            <TextInput
            style={{
                height:40,
                borderBottomColor:'gray',
                marginLeft:30,
                marginRight:20,
                marginTop:20,
                marginBottom:10,
                borderBottomWidth:1
            }}
            placeholder="driver name"
            
            />
            <TextInput
            style={{
                height:40,
                borderBottomColor:'gray',
                marginLeft:30,
                marginRight:20,
                marginTop:20,
                marginBottom:10,
                borderBottomWidth:1
            }}
            placeholder="Vehicle name"
            
            />
            <TextInput
            style={{
                height:40,
                borderBottomColor:'gray',
                marginLeft:30,
                marginRight:20,
                marginTop:20,
                marginBottom:10,
                borderBottomWidth:1
            }}
            placeholder="driver name"
            
            />
            <TouchableOpacity style={styles.modalCloseButton} onPress={()=>setisModalVisible(false)}>
<Text style={{fontSize:18,color:'white', textAlign:'center'}}>Close</Text>
</TouchableOpacity>
 </View>
 </View>
</Modal>
modalView:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      modal:{
          height:HEIGHT/2,
           width:WIDTH-20,
           paddingTop:10,
           backgroundColor:'white',
          
},
textView:{
  alignItems:'flex-start',

  
},
modalText:{
    color:'black',
    margin:5,
    fontSize:16,
    fontWeight:'bold'
},
</View>



