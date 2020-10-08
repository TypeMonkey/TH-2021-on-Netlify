/**
 * Landing Footer Section
 */

import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <footer id="footer">

                <p className="text-center">tritonhacks@gmail.com</p>

                <div className="container d-flex justify-content-around">

                    <img src="https://picsum.photos/50" alt="Social"/>
                    <img src="https://picsum.photos/50" alt="Social"/>
                    <img src="https://picsum.photos/50" alt="Social"/>
                    <img src="https://picsum.photos/50" alt="Social"/>

                </div>

            </footer>
        );
    }
  
}
export default Footer;