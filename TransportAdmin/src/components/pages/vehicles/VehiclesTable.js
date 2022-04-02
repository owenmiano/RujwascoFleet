import React,{useEffect,useState} from 'react'
import MaterialTable from 'material-table'
import tableIcons from '../../IconProvider'

function VehiclesTable(props) {
  const {columns}=props
  const [vehicles,setVehicles]=useState([])
  useEffect(()=>{
  
      const fetchData=()=>{
        // 
            fetch("http://localhost:4012/allVehicles")
            .then((resp)=>resp.json())
            .then(resp=>{
                
              setVehicles(resp)
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
  <div style={{maxWidth:950,
            justifyContent:"center",
            alignItems:'center',
            marginRight:10}}>

        <MaterialTable
         title="All Vehicles"
         columns={columns}
         icons={tableIcons}
         data={vehicles}
         options={{
            exportAllData:true,
            sorting:false,
            exportButton:true,
            search:true,
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
        </div>
    </div>
  )
}

export default VehiclesTable