import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function RowModal(props) {
    const {open,close,data}=props
  return (
    <div>
       <Dialog
       open={open}
       onClose={close}
       >
           <DialogTitle>Employee Name:{data.EmployeeName}</DialogTitle>
           <DialogContent>
           <TextField label={data.destination} disabled  margin="dense"  variant="outlined" fullWidth  />
           <TextField label={data.purpose} disabled  margin="dense"  variant="outlined" fullWidth  />
           <TextField label={data.driverId} disabled  margin="dense"  variant="outlined" fullWidth  />
           <TextField label={data.VehicleName} disabled  margin="dense"  variant="outlined" fullWidth  />
           <TextField label={data.RegNo} disabled  margin="dense"  variant="outlined" fullWidth  />

           </DialogContent>
           <DialogActions>
            <div style={{justifyContent:"space-between"}}>
          <Button onClick={close} color="secondary">Cancel</Button>
          <Button onClick={close} color="primary" autoFocus>Submit</Button>
          </div>
        </DialogActions>
       </Dialog>


    </div>
  )
}

export default RowModal