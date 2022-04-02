import React from 'react'
import RowAvatar from "../../RowAvatar";
import VehiclesTable from './VehiclesTable'
function Vehicles() {
  const columns=[
    {title:"Vehicle Name",field:"VehicleName",render:(rowData)=><RowAvatar name={rowData.VehicleName}/>},
    {title:"Vehicle Type",field:"VehicleType"},
    {title:"RegNo",field:"RegNo"},
  
     
   ]
  return (
    <div>
        <h1>This is the all vehicles page</h1>
        <VehiclesTable
         columns={columns}
        />
    </div>
  )
}

export default Vehicles