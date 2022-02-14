import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from 'material-table'
function Bookings(){
     const[bookings,setBookings]=useState([])
     const getBookingData=async()=>{
         try{
             const data=await axios.get("http://localhost:4012/GroupedBookings");
             setBookings(data.data);
             console.log(data)
         }catch(e){
             console.log(e)
         }
     };
     useEffect(()=>{
         getBookingData();
     },[])





    const columns=[
              {title:"Destination",field:"destination"},
              {title:"Assignment Status",field:"assignmentStatus"}
              

    ]
    return(
        <div>
            <h2 align="center">This page will show all bookings</h2>
            
            <MaterialTable title="BOokings" 
            data={bookings}
            columns={columns}
            />

        </div>
    )
}
export default Bookings;