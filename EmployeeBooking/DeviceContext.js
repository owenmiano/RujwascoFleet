import React,{useState,useEffect,createContext} from 'react'
import DeviceInfo from 'react-native-device-info'

export const DeviceContext=createContext();

export const DeviceProvider= props =>{
    const[EmployeedeviceID,setEmployeeDeviceID]=useState('');
    const [booking,setBooking]=useState([])   

    useEffect(() => {
        setEmployeeDeviceID(DeviceInfo.getUniqueId)
},[])
    return(
          <DeviceContext.Provider value={[EmployeedeviceID,setEmployeeDeviceID]}>
            {props.children}
          </DeviceContext.Provider>
    )
}