import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FetchSubreddits from './components/FetchSubreddits';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={FetchSubreddits} />
      </Router>
    );
  }
}

export default App;
