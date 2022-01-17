import React from 'react'
// import './Home.css';

import Navbar from './Navbar/Navbar';
import { ThemeProvider } from '@material-ui/core';
import Theme from './Themes/Theme'

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Bookings from './Bookings';
function Home(){
    return(
        <BrowserRouter>
        <div>
           <ThemeProvider theme={Theme}>
                 <Navbar/>
           </ThemeProvider>


               <Switch>
               <Route  path="/Book"  component={Bookings} />
            

               </Switch>
                
                
          

           </div>
           </BrowserRouter>
    
    )
}
export default Home;