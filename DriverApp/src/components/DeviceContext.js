import React,{useState,useEffect,createContext} from 'react'
import NetInfo from '@react-native-community/netinfo';

export const DeviceContext=createContext();
export const DeviceProvider= props =>{
    const[netInfo,setNetInfo] =useState('');

    // check network status
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
            <DeviceContext.Provider value={{value:[netInfo,setNetInfo]}}>
              {props.children}
            </DeviceContext.Provider>
      )


}