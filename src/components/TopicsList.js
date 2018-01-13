import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSubredditListToRender } from '../actions/index';

class TopicsList extends React.Component {
  componentDidMount() {
    if (this.props.topics.topicsWithSubreddits.length === 0) {
      this.props.history.push('/');
    }
  }

  handleClick = (topic, index) => {
    this.props.setSubredditListToRender(topic, this.props.topics.topicsWithSubreddits[index]);

    this.props.history.push('/subreddit-list');
  };

  render() {
    let topicList = this.props.topics.topicsWithSubreddits.map((topic, index) => {
      return (
        <div key={index}>
          <h1 onClick={() => this.handleClick(topic.name, index)} className="topic-list">
            {index + 1}. {topic.name.toUpperCase()}, points: {topic.points}
          </h1>
        </div>
      );
    });
    return (
      <div>
        <h1>Topic List (click for relevant subreddits)</h1>
        {topicList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    subredditList: state.subreddits.subredditListToRender
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSubredditListToRender }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
