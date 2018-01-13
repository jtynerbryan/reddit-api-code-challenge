import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSubredditsbyTopic, sortTopicsAndSubreddits } from '../actions/index';

class FetchSubreddits extends React.Component {
  state = {
    sorted: false,
    names: [
      'architecture',
      'art',
      'business',
      'education',
      'entertainment',
      'gaming',
      'general',
      'hobbies and interests',
      'law',
      'lifestyle',
      'locations',
      'meta',
      'music',
      'news and politics',
      'science',
      'social science and humanities',
      'sports',
      'technology',
      'travel',
      'other'
    ]
  };

  componentDidMount() {
    this.props.fetchSubredditsbyTopic(this.state.names);
  }

  componentDidUpdate() {
    if (this.props.topics.sorted === false) {
      setTimeout(() => {
        this.props.sortTopicsAndSubreddits(this.props.topics.topicsWithSubreddits);
      }, 3000);
    } else {
      this.props.history.push('/topics');
    }
  }

  render() {
    return (
      <div>
        <h1>Fetching and Sorting Subreddits By Topic...</h1>
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
  return bindActionCreators({ fetchSubredditsbyTopic, sortTopicsAndSubreddits }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchSubreddits);
