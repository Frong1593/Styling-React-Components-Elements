import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Redux from '../component/Redux'
import {Navigation} from './Navigation.js';


function App (){
    return (
            <Router>
            <div className="container">
            <h3 className="m-3 d-flex justify-contnet-center"> React JS Work from home </h3>
            <Navigation/>
   
            <Switch>
                <Route path='/Redux' component={Redux} exact/>  

            </Switch>
            </div>
            </Router>
    )
}
export default App;