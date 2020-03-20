import React, { Component } from 'react';

const styles = {
    panel: {
      backgroundColor: '#00ffff',
      textAlign: 'left',
      width: '100%',
      padding: '20px',
      ':hover': {
        color: '#ffffff',
        cursor: 'pointer'
      },
      '@media (max-width: 700px)': {
        backgroundColor: '#ff0000'
      }
    }
  };
  const font = {
    panel: {
      backgroundColor: '#C0C0C0',
      textAlign: 'left',
      width: '100%',
      padding: '20px',
      ':hover': {
        color: '#ffffff',
        cursor: 'pointer'
      },
      '@media (max-width: 700px)': {
        backgroundColor: '#ff0000'
      }
    }
  };
  const font2 = {
    panel: {
      backgroundColor: '#808080',
      textAlign: 'left',
      width: '100%',
      padding: '20px',
      ':hover': {
        color: '#ffffff',
        cursor: 'pointer'
      },
      '@media (max-width: 700px)': {
        backgroundColor: '#ff0000'
      }
    }
  };
  const font3 = {
    panel: {
      backgroundColor: '#FFA500',
      textAlign: 'left',
      width: '100%',
      padding: '20px',
      ':hover': {
        color: '#ffffff',
        cursor: 'pointer'
      },
      '@media (max-width: 700px)': {
        backgroundColor: '#ff0000'
      }
    }
  };

class radium  extends Component {
    render(){
        return (
        <div>
             <hr/><h2 style={styles.panel} >This is Radium  page</h2><hr/>
             <h2 style={font.panel}>Radium_1 </h2><hr/>
             <h2 style={font2.panel}>Radium_2 </h2><hr/>
             <h2 style={font3.panel}>Radium_3 </h2><hr/>
             
        </div>
        );
    }
}
export default radium ;