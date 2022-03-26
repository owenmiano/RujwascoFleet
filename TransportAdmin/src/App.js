import './App.css';
import React from "react"
import NavbarThemeComponent from './components/navbar/NavbarThemeComponent';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Bookings from './components/pages/bookings/Bookings'
import Drivers from './components/pages/drivers/Drivers';
import Vehicles from './components/pages/vehicles/Vehicles';
import ErrorPage from './components/pages/error/ErrorPage';

function App(){
    return(
        <Router>
          <NavbarThemeComponent/> 
          <div className='content'>
           <Routes>
             <Route path="/" element={<Bookings/>} />
             <Route path="/drivers" element={<Drivers/>} />
             <Route path="/vehicles" element={<Vehicles/>} />
             <Route path="*" element={<ErrorPage/>} />
           </Routes>
           </div>
        </Router>

      
    )
}
export default App;