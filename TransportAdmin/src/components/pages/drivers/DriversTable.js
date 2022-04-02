import React,{useEffect,useState} from 'react'
import MaterialTable from 'material-table'
import tableIcons from '../../IconProvider'



function DriversTable(props) {
    
    const {columns}=props
    const [drivers,setDrivers]=useState([])
    useEffect(()=>{
    
        const fetchData=()=>{
          // 
              fetch("http://localhost:4012/allDrivers")
              .then((resp)=>resp.json())
              .then(resp=>{
                  
                setDrivers(resp)
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
         title="All Drivers"
         columns={columns}
         icons={tableIcons}
         data={drivers}
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

export default DriversTable