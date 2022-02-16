import React, { useState } from "react";
import axios from "axios";
import { StyleSheet,Text,TouchableOpacity,View, FlatList} from "react-native";

const DATA = [
    {
      id: 1,
      title: 'First Item',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Second Item',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Third Item',
      status: 'pending'
    },
  ];

function HomeScreen({navigation}){
 
const [data,setData]=useState(DATA)   


const Item = ({title,status}) => {
          return(
    <TouchableOpacity  style={{flex:1,marginBottom:8,justifyContent:'center',marginLeft:5  }}>
            
    <Text style={{fontSize:15,marginBottom:15,color:'green'}}>Destination:{title}</Text> 
    <Text style={{fontSize:10,color:'red'}}>Assignment Status:{status}</Text> 

              </TouchableOpacity>
              
              
          )
          };
    const renderSeparator =()=>{
        return(
            <View style={{height:1,width:'100%',backgroundColor:'black'}}>
            </View>
        )
    }

    return(
              
             <View style={styles.container}>
                   <FlatList
                    data={data}
                     keyExtractor={(trip)=> trip.id.toString()}
                    renderItem={({item})=>(
                        <Item title={item.title} status={item.status}/>
                    )}
                     ItemSeparatorComponent={renderSeparator}
                   />
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
  
    },
    fabIcon: { 
        fontSize: 20, 
        color: 'white' 
      },
    


})
export default HomeScreen