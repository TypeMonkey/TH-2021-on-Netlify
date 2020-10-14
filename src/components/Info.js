/**
 * Landing Info Section
 */

import React from 'react';
import TransitionIn from '../svg/transition1.svg';
import TransitionOut from '../svg/transition2.svg';
import crown from '../png/crown.png';
import backpack from '../png/backpack.png';
import network from '../png/network.png';

/* reusable card component */
class InfoCard extends React.Component{

    render(){
        return(
            <div className="card">
                <img src={this.props.link} className="card-img-top info-image" alt="TritonHacks 2021"/>

                <div className="card-body">
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

class Info extends React.Component{
    
    constructor(){
        super();

        this.state = {
            text: [
                ['High-school-centric, all skill levels welcome hackathon at UCSD', backpack],
                ['Close project mentorship with university students in STEM', crown],
                ['Cutting-edge workshops hosted by tech-saavy programmers', network]
            ]
        };
    }

    render(){
        return(
            <section id="about">
                <img id="info-transition-in" src={TransitionIn} alt="graphic"/>

                <div className="container">
                    <h1 className="text-center">TritonHacks?</h1>
                    <p className="text-center">Yup. We're the first of our kind.</p>

                    <div className="container card-deck">
                        { this.state.text.map( (text) => <InfoCard text={text[0]} link={text[1]} key={text[0].substring(0, 3)}/> ) }
                    </div>
                </div>

                <img id="info-transition-out" src={TransitionOut} alt="graphic"/>

            </section>
        );
    }
  
}
export default Info;