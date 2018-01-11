import { combineReducers } from 'redux';
import topics from './topics';
import subreddits from './subreddits';

const redditApp = combineReducers({
  topics: topics,
  subreddits: subreddits
});

export default redditApp;
