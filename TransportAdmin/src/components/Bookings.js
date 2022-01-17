import React from "react";
import MaterialTable from 'material-table'
function Bookings(){
    const columns=[
              {title:"Destination",field:"desitination"},
              {title:"Assignment Status",field:"assignmentStatus"},
              {title:"Destination",field:"desitination"},

    ]
    return(
        <div>
            <h2 align="center">This page will show all bookings</h2>
            
            <MaterialTable columns={columns} title="BOokings" />

        </div>
    )
}
export default Bookings;