import React,{useState,useEffect,createContext} from 'react'
import DeviceInfo from 'react-native-device-info'
import NetInfo from '@react-native-community/netinfo';

export const DeviceContext=createContext();

export const DeviceProvider= props =>{
    const[EmployeedeviceID,setEmployeeDeviceID]=useState('');
    const [booking,setBooking]=useState([])  
    const[netInfo,setNetInfo] =useState('');

useEffect(()=>{
      const deviceId=async()=>{
          const deviceID=await DeviceInfo.getUniqueId()
              setEmployeeDeviceID(deviceID)
      } 
          
       deviceId()

  },[])
  

  useEffect(()=>{
    // Subscribe to network state updates
      const network=NetInfo.addEventListener((state) => {
        setNetInfo(state.isConnected)
      
      })   
      return () => {
        // Unsubscribe to network state updates
        network();
      };
  })
    return(
          <DeviceContext.Provider value={{value:[EmployeedeviceID,setEmployeeDeviceID],value2:[booking,setBooking],value3:[netInfo,setNetInfo]}}>
            {props.children}
          </DeviceContext.Provider>
    )
}