import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedSubreddit } from '../actions/index';

class SubredditList extends React.Component {
  handleClick = () => {
    this.props.history.push('/topics');
  };

  handleSelectedSubReddit = subreddit => {
    this.props.setSelectedSubreddit(subreddit);
    setTimeout(() => {
      this.props.history.push('/subreddit');
    }, 500);
  };

  render() {
    let subredditList = this.props.subredditList.subreddits.slice(1).map((subreddit, index) => {
      return (
        <div key={index}>
          <h1 className="subreddit" onClick={() => this.handleSelectedSubReddit(subreddit.data.display_name_prefixed)}>
            {subreddit.data.display_name_prefixed}
          </h1>
          <h2>{subreddit.data.public_description}</h2>
          <h3>{subreddit.data.subscribers} subscribers</h3>
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.handleClick}>all topics</button>
        <h1>{this.props.subredditList.topic.toUpperCase()}</h1>
        {subredditList}
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
  return bindActionCreators({ setSelectedSubreddit }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SubredditList);
