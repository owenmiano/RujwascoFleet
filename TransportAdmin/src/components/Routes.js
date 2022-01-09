import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from "./Home";
// import Login from './components/AdminLogin';

function Routes() {
    return (
      // <Route path="/login"  component={Login} />
         <Switch>
   

         <Route path="/homeee"  component={Home} />
         </Switch>
    );

  }
  export default Routes;