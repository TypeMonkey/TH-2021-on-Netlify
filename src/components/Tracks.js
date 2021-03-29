/**
 * Landing Tracks Section
 */

import React from 'react';
import Web from '../png/web.png';
import Game from '../png/game.png';
import App from '../png/mobile.png';
import Data from '../png/data.png';

class Tracks extends React.Component{

    render(){
        return(
            <section id="tracks">

                <div id="tracks-title">
                    <h1>4</h1>
                    <h3>Tracks</h3>
                </div>

                <div id="tracks-visuals">
                    <img src={Web} alt="track"/>
                    <img src={Data} alt="track"/>
                    <img src={Game} alt="track"/>
                    <img src={App} alt="track"/>
                </div>
           

            </section>
        );
    }
  
}
export default Tracks;