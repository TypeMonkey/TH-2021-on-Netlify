/**
 * Landing Partners Section
 */

import React from 'react';
import Sweetwater from '../png/Sweetwater.png';
import CODE from '../png/codeorg.png';
import CSTA from '../png/csta.png';
import Create from '../png/ucsdCreate.png';
import Achieve from '../png/achieve.png';
import ServiceNow from '../png/servicenow.png';


class Sponsor extends React.Component{

    constructor(){
        super();
        
        /** Partner images go here
         * they'll get mapped into the page section
         */
        this.state = {
            partners: [
                CSTA,
                Achieve,
                Sweetwater,
                CODE,
                Create,
				ServiceNow
            ]
        }
    }

    render(){
        return(
            <section className="partners sponsors">
                <h3 className="text-center">Sponsored By:</h3>
                <div className="d-flex flex-wrap justify-content-around">

                    {this.state.partners.map(
                        (img) => {return (<img key={Math.random()} className="sponsor" alt="Our Partners" src={img}/>)}
                    )}
                    
                </div>
            </section>
        );
    }
  
}
export default Sponsor;