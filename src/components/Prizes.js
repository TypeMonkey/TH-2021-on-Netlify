/**
 * Landing Prizes Section
 */

import React from 'react';

class Prizes extends React.Component{

    render() {
        return (
            <section id="prizes">
                <h3 className="text-center">Prizes</h3>
                <div className="container d-flex justify-content-around">
                    <img src="https://picsum.photos/1000/300" alt="Winner Podium"/>
                </div>
            </section>
        );
    }
  
}
export default Prizes;