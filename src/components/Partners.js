/**
 * Landing Partners Section
 */

import React from 'react';
import acm from '../png/acm.png';
import CSforeach from '../png/CSforeach.png';
import SENDforC from '../png/SENDforC.png';
import ubic from '../png/ubic.png';
import SDCOE from '../png/SDCOE.png';

class Partners extends React.Component{

    constructor(){
        super();
        
        /** Partner images go here
         * they'll get mapped into the page section
         */
        this.state = {
            partners: [
                SENDforC,
                ubic,
                CSforeach,
                acm,
                SDCOE
            ]
        }
    }

    render(){
        return(
            <section className="partners">
                <h3 className="text-center">Partners</h3>
                <div className="d-flex justify-content-around">

                    {this.state.partners.map(
                        (img) => {return (<img key={Math.random()} alt="Our Partners" src={img}/>)}
                    )}
                    
                </div>
            </section>
        );
    }
  
}
export default Partners;