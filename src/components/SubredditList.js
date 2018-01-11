import React from 'react';
import { connect } from 'react-redux';

class SubredditList extends React.Component {
  // componentWillMount() {
  //   // if (this.props.subredditList.subreddits === undefined) {
  //   //   this.props.history.push('/');
  //   // }
  // }

  backToAllTopics = () => {
    this.props.history.push('/topics');
  };

  render() {
    console.log(this.props);
    let subredditList = this.props.subredditList.subreddits.subreddits.slice(1).map((subreddit, index) => {
      return (
        <div key={index}>
          <h1 className="subreddit">{subreddit.data.display_name_prefixed}</h1>
          <h2>{subreddit.data.public_description}</h2>
          <h3>{subreddit.data.subscribers} subscribers</h3>
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.backToAllTopics}>all topics</button>
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

export default connect(mapStateToProps, null)(SubredditList);
