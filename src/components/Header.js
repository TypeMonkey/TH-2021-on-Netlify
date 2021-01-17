/**
 * Landing Header
 */

import React from 'react';
import HeadGraphic from '../svg/header_art.svg';

class Header extends React.Component{

  render(){
    return(
      <header id="header" className="jumbotron">
        
        <div className="container-fluid d-flex justify-content-around">

          <div className="col-md-4 d-flex flex-column justify-content-around">

            <div>
              <h1><span className="title-underline-left">Tr</span>itonHacks 2021</h1>
              <h3>Coming Soon!</h3>
            </div>

            <div id="button-group">
              {/*<button className="btn btn-primary m-2">Sign Up</button>*/}
              <button className="btn btn-primary  m-2"><a href="https://tripetto.app/run/4D2SQSOWMB" target="_blank">Sign up</a></button>
            </div>

          </div>

          <div className="col-md-5">
            <img src={HeadGraphic} alt="TritonHacks 2021"/>
          </div>
        
        </div>

      </header>
    );
  }
  
}
export default Header;