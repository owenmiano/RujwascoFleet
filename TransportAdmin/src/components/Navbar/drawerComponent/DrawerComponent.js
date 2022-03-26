import React,{useState} from 'react'
import {Drawer,List, ListItemText,ListItem, ListItemIcon, IconButton, makeStyles} from '@material-ui/core'
import {GrMenu} from 'react-icons/gr'



const useStyles= makeStyles(theme=>({
  menuIconContainer:{
    marginLeft:'auto'
  },
}))


function DrawerComponent() {
 const[openDrawer,setOpenDrawer]=useState(true)
 const classes=useStyles()

  return (
    <>
     <Drawer
    anchor='left'
    onClose={()=>setOpenDrawer(false)}
    open={openDrawer}
    >
      <List>
      <ListItem divider button>
          <ListItemIcon>
          <ListItemText>Bookings</ListItemText>
           </ListItemIcon>
        </ListItem>
      <ListItem divider button>
          <ListItemIcon>
          <ListItemText>Bookings</ListItemText>
           </ListItemIcon>
        </ListItem>
      </List>
</Drawer>
<IconButton className={classes.menuIconContainer} onClick={()=>setOpenDrawer(!openDrawer)}>
  <GrMenu/>
</IconButton>
</>
   
  )
}

export default DrawerComponent