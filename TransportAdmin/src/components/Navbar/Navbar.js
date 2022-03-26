import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import {AppBar, Box,Tab, Tabs, Toolbar,useMediaQuery,useTheme} from '@material-ui/core'
import {BiTask} from 'react-icons/bi'
import {MdEmojiTransportation} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
import DrawerComponent from './drawerComponent/DrawerComponent'



const useStyles= makeStyles(theme =>({
    icons:{
        fontSize: '1.4rem',
    },
    
        tabsContainer: {
            marginLeft: '90px',
            flexGrow:1
          }
         

}))


function Navbar(){
  const classes = useStyles();

    const [value,setValue]=useState(0);
   
    const handleChangeTab=(e,newValue)=>{
       setValue(newValue)
    }

    //Breakpoint
    const theme=useTheme();

     const isMatch=useMediaQuery(theme.breakpoints.down('sm'))
        
    return(
       
            <>
                <AppBar color='primary' position='fixed' padding-bottom='40px' >

                        <Toolbar>
                        <Box
                        component="img"
                        alt="Your logo."
                        src={logo}
                        sx={{
                            height: 64,
                            }}
                            />

                           {isMatch ? <DrawerComponent/>:
                           (
                               <>
                               <Tabs 
                                 value={value}
                                 onChange={handleChangeTab}
                                 indicatorColor='secondary'
                                 className={classes.tabsContainer}
                                >
                                <Tab icon={<BiTask className={classes.icons}/>} component={Link} to="/" disableRipple label='Bookings'/>
                                <Tab icon={<MdEmojiTransportation className={classes.icons}/>} component={Link} to="/vehicles" disableRipple label='Vehicles'/>
                                <Tab icon={<FaUsers className={classes.icons}/>} component={Link} to="/drivers" disableRipple label='Drivers'/>

                                    </Tabs>
                               </>
                           )} 
                                
                                {/* <Button  
                                variant="contained"
                                color="secondary"
                               
                                onClick={logout}
                                aria-controls='menu'
                                //  onMouseOver={handleOpenMenu}
                                 disableElevation>
                                    
                            LOG OUT</Button> */}
                        </Toolbar>
                </AppBar>
       
            </>
                  
    )
   
}
export default Navbar;