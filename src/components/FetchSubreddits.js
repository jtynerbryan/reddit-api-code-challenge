import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSubredditsbyTopic } from '../actions/index';

class FetchSubreddits extends React.Component {
  state = {
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
    if (this.props.topics.topicsWithSubreddits.length === 0) {
      this.props.fetchSubredditsbyTopic(this.state.names);
    }

    this.props.history.push('/topics');
  }

  render() {
    return (
      <div>
        <h1>Fetching Subreddits By Topic...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSubredditsbyTopic }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchSubreddits);
