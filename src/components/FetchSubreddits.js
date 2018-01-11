import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchSubredditsbyTopic from '../actions/index';

class FetchSubreddits extends React.Component {
  // componentDidMount() {
  //   if (this.props.subreddits.subreddits.length === 0) {
  //     this.props.fetchSubredditsbyTopic(this.props.topics.names);
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Fetching Subreddits By Topic...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    subreddits: state.subreddits
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSubredditsbyTopic }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchSubreddits);
