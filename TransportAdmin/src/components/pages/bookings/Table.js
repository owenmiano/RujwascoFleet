import React,{useEffect,useState} from "react";
import MaterialTable from 'material-table'

function Table(props) {
    const  {columns,icons,data}=props;
    const [bookings,setBookings]=useState([])
    const[loading,setLoading]=useState(false)

useEffect(()=>{
    setLoading(true)
  const fetchData=  setTimeout(()=>{
       
        fetch("http://localhost:4012/AllTodaysBooking")
        .then((resp)=>resp.json())
        .then(resp=>{
            setLoading(false)
            setBookings(resp)
            console.log(resp)
        })
        .catch(error => {
            setLoading(false)
            console.log(error)
        })

    },2000)
    return () => clearTimeout(fetchData);



},[])




  return (
    <div>
            <MaterialTable 
            title="Vehicle Bookings"
            data={bookings} 
            icons={icons}
            columns={columns}
            editable={{
                
            }}
            options={{
                exportAllData:true,
                sorting:false,
                exportButton:true,
                search:false,
                grouping:true,
                actionsColumnIndex:-1,
                headerStyle:{fontWeight:'bold'}
            }}
            />




    </div>
  )
}

export default Table