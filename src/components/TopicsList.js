import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortTopicsAndSubreddits, setSubredditListToRender } from '../actions/index';

class TopicsList extends React.Component {
  state = {
    sorted: false
  };

  componentDidMount() {
    if (Object.keys(this.props.subredditList).length > 0) {
      this.setState({
        sorted: true
      });
      return;
    } else {
      setTimeout(() => {
        if (this.props.topics.topicsWithSubreddits.length === 0) {
          this.props.history.push('/');
        } else {
          this.props.sortTopicsAndSubreddits(this.props.topics.topicsWithSubreddits);
        }
      }, 3000);
    }
  }

  componentDidUpdate() {
    if (!this.state.sorted) {
      this.setState({
        sorted: true
      });
    }
  }

  handleClick = (topic, index) => {
    this.props.setSubredditListToRender(topic, this.props.topics.topicsWithSubreddits[index]);

    this.props.history.push('/subreddit-list');
  };

  render() {
    console.log(this.props);
    if (!this.state.sorted) {
      return (
        <div>
          <h1>Fetching and Sorting Topics + Subreddits...</h1>
        </div>
      );
    } else {
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
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    subredditList: state.subreddits.subredditListToRender
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sortTopicsAndSubreddits, setSubredditListToRender }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
