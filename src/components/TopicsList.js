import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortTopics } from '../actions/index';

class TopicsList extends React.Component {
  state = {
    sorted: false
  };

  componentDidMount() {
    setTimeout(() => {
      if (this.props.topics.topicsWithSubreddits.length === 0) {
        this.props.history.push('/');
      } else {
        this.props.sortTopics(this.props.topics.topicsWithSubreddits);
      }
    }, 2000);
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
          <h1>Sorting Topics...</h1>
        </div>
      );
    } else {
      let topicList = this.props.topics.topicsWithSubreddits.map((topic, index) => {
        return (
          <div key={index}>
            <h1>
              {index + 1}. {topic.name}, points: {topic.points}
            </h1>
          </div>
        );
      });
      return (
        <div>
          <h1>Topic List</h1>
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
  return bindActionCreators({ sortTopics }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
