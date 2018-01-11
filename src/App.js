import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FetchSubreddits from './components/FetchSubreddits';
import TopicsList from './components/TopicsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FetchSubreddits} />
          <Route exact path="/topics" component={TopicsList} />
        </div>
      </Router>
    );
  }
}

export default App;
