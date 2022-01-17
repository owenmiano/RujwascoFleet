import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import {AppBar, Box, Button, Tab, Tabs, Toolbar} from '@material-ui/core'
import {FiBookOpen} from 'react-icons/fi'
import {MdEmojiTransportation} from 'react-icons/md'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
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
    // const [anchorEl, setAnchorEl] = useState(null);
    // const handleOpenMenu = e => {
    //     setAnchorEl(e.currentTarget);
    //   };
    //   const handleCloseMenu = () => {
    //     setAnchorEl(null);
    //   };
    const handleChangeTab=(e,newValue)=>{
       setValue(newValue)
    }

   const logout=()=> {
        localStorage.clear();
        window.location.href = '/login';
    }



    return(
            <>
                <AppBar color='primary' position='fixed'>

                        <Toolbar>
                        <Box
                        component="img"
                        alt="Your logo."
                        src={logo}
                        sx={{
                            height: 64,
                            }}

/>
                                <Tabs 
                                 value={value}
                                 onChange={handleChangeTab}
                                 indicatorColor='secondary'
                                 className={classes.tabsContainer}
                                >
                                    <Tab icon={<FiBookOpen className={classes.icons}/>} component={Link} to="/Book" disableRipple label='Bookings'/>
                                    <Tab icon={<MdEmojiTransportation className={classes.icons}/>} component={Link} to="/Book" disableRipple label='TRANSPORT'/>
                                    <Tab icon={<FiBookOpen className={classes.icons}/>} component={Link} to="/home" disableRipple label='Bookings'/>

                                    </Tabs>
                                <Button  
                                variant="contained"
                                color="secondary"
                               
                                onClick={logout}
                                aria-controls='menu'
                                //  onMouseOver={handleOpenMenu}
                                 disableElevation>
                                    
                            LOG OUT</Button>
                        </Toolbar>
                </AppBar>
                {/* <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Examination Results</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Promotions</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pending Fees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Final Project</MenuItem>
      </Menu> */}

            </>
                  
           
    )
}
export default Navbar;