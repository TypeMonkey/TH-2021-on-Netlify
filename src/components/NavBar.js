/**
 * Landing Navigation Bar
 */

import React from 'react';

class NavBar extends React.Component{

  constructor(){
    super();

    /** Nav link names will be mapped */
    this.state = {
      links: [
        "About",
        "Tracks",
        "Partners",
      ]
    }

  }

  render(){
    return(
      <nav id="nav" className="navbar navbar-expand-sm nav">

        <a href="." className="navbar-brand">TritonHacks</a>

        {this.state.links.map(
          (nav) => {return(<a href={'#' + nav.toLowerCase()} key={nav} className="nav-link" >{nav}</a>)}
        )}
     
      </nav>
    );
  }

}
export default NavBar;