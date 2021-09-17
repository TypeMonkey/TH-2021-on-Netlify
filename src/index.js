/**
 * Entrypoint for page visitors
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './css/Variables.css';
import './css/index.css';
import Landing from './Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const shortLinks = {
  'recruiting': 'https://ucsd.zoom.us/my/fashai'
}
ReactDOM.render(
  <React.StrictMode>
    {/* Add routing later for the form */}
    <Router>
      <Switch>
        { Object.keys(shortLinks).map(key => (
          <Route exact path={`/${key}`} component={() => window.location = shortLinks[key]} />
        ))}
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);