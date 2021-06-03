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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIM_YCWeF7v8UiLVFmBM8O-U2zgommqk2PeiXGdblb7XWQ5Q/viewform">Sign Up</a>
          <a href="https://tripetto.app/run/NDQSG6N1J1">Volunteer</a>
        </div>

        <video autoPlay loop muted>
          <source src={Grid} type="video/mp4"/>
        </video>

      </header>
    );
  }
  
}
export default Header;