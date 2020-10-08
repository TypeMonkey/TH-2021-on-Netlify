/**
 * Landing Tracks Section
 */

import React from 'react';
import Web from '../svg/web.svg';
import Game from '../svg/game.svg';
import App from '../svg/app.svg';

class Tracks extends React.Component{

    render(){
        return(
            <section id="tracks">

                <div id="tracks-title">
                    <h1>3</h1>
                    <h3>Tracks</h3>
                </div>

                <div id="tracks-visuals">
                    <img src={Game} alt="track"/>
                    <img src={App} alt="track"/>
                    <img src={Web} alt="track"/>
                </div>
           

            </section>
        );
    }
  
}
export default Tracks;