//import React from 'react';

import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';


import {login} from './login';
import {NoMatch} from './nomatch';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Switch>
              <Route exact path="/" component={login} />             
              <Route exact path="/login" component={login} />           
              <Route component={NoMatch} />
            </Switch>
        
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
