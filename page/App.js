import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Home from '../component/Home.js'
import radium  from '../component/radium '
import StyledComponent from '../component/StyledComponent.js'
import {Navigation} from './Navigation.js';


function App (){
    return (
            <Router>
            <div className="container">
            <h3 className="m-3 d-flex justify-contnet-center"> React JS Work from home </h3>
            <Navigation/>
            
            <Switch>
                <Route path='/' component={Home} exact/>  
                <Route path='/radium' component={radium} exact/>  
                <Route path='/StyledComponent' component={StyledComponent} exact/>  
            </Switch>
            </div>
            </Router>
    )
}
export default App;