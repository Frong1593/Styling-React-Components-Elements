import React, { Component } from 'react';



class Home extends Component {
    render(){
        return (
        <div>
         <hr/>
         <h2>This is Home page</h2>
         <hr/>
         <img style={{marginLeft:330,marginTop:50}} src={require('../page/Dancing.gif')} width="380" height="400"/> 
         </div>
        );
    }
}
export default Home;