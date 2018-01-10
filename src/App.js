import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Redirect from './components/Redirect';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/success" component={Redirect} />
        </div>
      </Router>
    );
  }
}

export default App;

// let secret = 'Rd76aou4XMMlCoZ15Q7UQskJiKY'
