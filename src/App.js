import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FetchSubreddits from './components/FetchSubreddits';
import TopicsList from './components/TopicsList';
import SubredditList from './components/SubredditList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FetchSubreddits} />
        <Route exact path="/topics" component={TopicsList} />
        <Route exact path="/subreddit-list" component={SubredditList} />
      </div>
    );
  }
}

export default App;
