import React from 'react'
// import './Home.css';
import { ThemeProvider } from '@material-ui/core';

import Navbar from './Navbar';
import Theme from '../Themes/Theme'

function NavbarThemeComponent(){
    return(
        
        <div>
           <ThemeProvider theme={Theme}>
                 <Navbar/>
           </ThemeProvider>
</div>
       
    
    )
}
export default NavbarThemeComponent;