import React from 'react';
import { HashRouter as Router, Route } from 'react-router';

// Components
import App from './components/app';

export default (
  <Router>
    <Route path ="/" component={App} />
  </Router>
);
