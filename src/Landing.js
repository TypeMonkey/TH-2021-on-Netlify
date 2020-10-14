/**
 * Parent Container for landing page
 */
import React from 'react';

/* Sections as Components */
import NavBar from './components/NavBar';
import Header from './components/Header';
import Info from './components/Info';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Guests from './components/Guests';
import Sponsors from './components/Sponsors';
import Partners from './components/Partners';
import Footer from './components/Footer';
import CheckBack from './components/CheckBack';

/* CSS per component */
import './css/NavBar.css';
import './css/Header.css';
import './css/Info.css';
import './css/Tracks.css';
import './css/Schedule.css';
/*import './css/Prizes.css';*/
import './css/Partners.css';
import './css/Footer.css';
import './css/CheckBack.css';


//Copy/Paste comment if we need to hide sections:
//          {/*  */}

function Landing() {
  return (
    <div id="landing">

      {/* Add Landing Components Below */}
      <NavBar/>
      <Header/>
      <Info/>
      <Tracks/>
      <CheckBack/>
      <Partners/>
      <Footer/>



    </div>
  );
}

export default Landing;
