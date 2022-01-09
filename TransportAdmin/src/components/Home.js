import React from 'react'
import Navbar from './Navbar/Navbar';
import { ThemeProvider } from '@material-ui/core';
import Theme from './Themes/Theme'
function Home(){
    return(
        <div>
           <ThemeProvider theme={Theme}>
                 <Navbar/>
           </ThemeProvider>
           
       



           </div>
    )
}
export default Home;