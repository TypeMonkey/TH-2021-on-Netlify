/**
 * Entrypoint for page visitors
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './css/Variables.css';
import './css/index.css';
import Landing from './Landing';

ReactDOM.render(
  <React.StrictMode>
    {/* Add routing later for the form */}
    <Landing/>
  </React.StrictMode>,
  document.getElementById('root')
);