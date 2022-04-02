import React,{useEffect,useState} from "react";
import MaterialTable from 'material-table'
import RowModal from "./RowModal";
import tableIcons from '../../IconProvider'



function BookingsTable(props) {
    const  {columns}=props;
    const [bookings,setBookings]=useState([])
    const [showModal,setShowModal]=useState(false)
    const [modalInfo, setModalInfo] = useState([]);

 const closeModal=()=>{
    setShowModal(false)
 }




useEffect(()=>{
    
  const fetchData=()=>{
    // 
        fetch("http://localhost:4012/AllTodaysBooking")
        .then((resp)=>resp.json())
        .then(resp=>{
            
            setBookings(resp)
            console.log(resp)
        })
        .catch(error => {
           
            console.log(error)
        })
    }
    fetchData()  
},[])




  return (
    <div>
      <div style={{maxWidth:950}}> 
            <MaterialTable 
            title="Vehicle Bookings"
            data={bookings} 
            icons={tableIcons}
            columns={columns}
            // onRowClick={(evt,rowData)=>setShowModal(true)}
            onRowClick={((evt, rowData) =>{
                setShowModal(true)
                setModalInfo(rowData)
                 console.log(rowData)
            }
         )}
            editable={{
                
            }}
            options={{
                exportAllData:true,
                sorting:false,
                exportButton:true,
                search:false,
                grouping:true,
                actionsColumnIndex:-1,
                headerStyle:{
                fontWeight:'bold',
                background:'#1434A4	',
                color:'white',
                width:5,
                minWidth: 5
            },
            cellStyle: {
                width: 5,
                minWidth: 5
              },
            }}
            />
        <RowModal
          open={showModal}
          close={closeModal}
          data={modalInfo}

        />

</div>

    </div>
  )
}

export default BookingsTable