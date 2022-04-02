import BookingsTable from './BookingsTable';
import RowAvatar from "../../RowAvatar";

function Bookings(){
    const columns=[
            {title:"Employee Name",field:"EmployeeName",render:(rowData)=><RowAvatar name={rowData.EmployeeName}/>},
            {title:"Destination",field:"destination"},
            {title:"Purpose",field:"purpose"},
            {title:"Assignment Status",field:"AssignmentStatus",
            render:(rowData)=><div style={{color:rowData.AssignmentStatus==="Pending"?"#ff0000":"#008000",fontWeight:"bold"}}>{rowData.AssignmentStatus}</div>},

            {title:"Driver",field:"driver"},
            {title:"Trip Status",field:"Trip"},
           ]
 
    return(
        <div>
            <h2>This page will show all bookings</h2>
           
            
               <BookingsTable
                
               columns={columns}
              
               />

        </div>
    
    ) 
}
export default Bookings;