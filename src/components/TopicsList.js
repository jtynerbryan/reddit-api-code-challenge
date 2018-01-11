import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortTopicsAndSubreddits } from '../actions/index';
import Topic from './Topic';

class TopicsList extends React.Component {
  state = {
    sorted: false
  };

  componentDidMount() {
    setTimeout(() => {
      if (this.props.topics.topicsWithSubreddits.length === 0) {
        this.props.history.push('/');
      } else {
        this.props.sortTopicsAndSubreddits(this.props.topics.topicsWithSubreddits);
      }
    }, 3000);
  }

  componentDidUpdate() {
    if (!this.state.sorted) {
      this.setState({
        sorted: true
      });
    }
  }

  render() {
    console.log(this.props);
    if (!this.state.sorted) {
      return (
        <div>
          <h1>Sorting Topics and Subreddits...</h1>
        </div>
      );
    } else {
      let topicList = this.props.topics.topicsWithSubreddits.map((topic, index) => {
        return <Topic key={index} topic={topic} index={index} />;
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
    topics: state.topics
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sortTopicsAndSubreddits }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
