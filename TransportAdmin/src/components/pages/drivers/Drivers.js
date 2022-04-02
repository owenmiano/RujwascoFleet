import React from 'react'
import RowAvatar from "../../RowAvatar";
import DriversTable from './DriversTable';
function Drivers() {
  const columns=[
    {title:"Driver Name",field:"driverName",render:(rowData)=><RowAvatar name={rowData.driverName}/>},
    {title:"password",field:"password"},
    {title:"Phone NO",field:"phoneNO"},
  
     
   ]
  return (
    <div>
       <h1>This is the drivers</h1>
        <DriversTable
        columns={columns}
       
        />
 
    </div>
  )
}

export default Drivers