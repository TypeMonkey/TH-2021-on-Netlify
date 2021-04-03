/**
 * Landing Header
 */

import Grid from '../grid.mp4';

import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <header id="header">
        
        <div id="header-title">
          <h1>TRITONHACKS</h1>
          <h1>2021</h1>
        </div>

        <div id="header-links">
          <a href="https://tripetto.app/run/4D2SQSOWMB">Sign Up</a>
          <a href=".">Volunteer</a>
        </div>

        <video autoPlay loop muted>
          <source src={Grid} type="video/mp4"/>
        </video>

      </header>
    );
  }
  
}
export default Header;