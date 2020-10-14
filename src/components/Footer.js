/**
 * Landing Footer Section
 */

import React from 'react';
import Email from '../png/email.png';
import Facebook from '../png/facebook.png';

class Footer extends React.Component{

    render(){
        return(
            <footer id="footer">

                <h3 className="text-center">Contact us</h3>

                <div className="container d-flex justify-content-around">
                    <a href="mailto:tritonhacks@gmail.com" aria-label="Email">
                        <img src={Email} alt="Email Icon" height="50" width="50"/>
                    </a>
                    <a href="https://www.facebook.com/events/2905938252971652/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook Icon" height="50" width="50"/>
                    </a>
                </div>

            </footer>
        );
    }
  
}
export default Footer;