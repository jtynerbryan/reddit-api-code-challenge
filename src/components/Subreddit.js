import React from 'react';
import { connect } from 'react-redux';

class Subreddit extends React.Component {
  handleClick = () => {
    this.props.history.push('/subreddit-list');
  };

  render() {
    let posts = this.props.subreddits.selectedSubreddit.map((post, index) => {
      return (
        <div key={index}>
          <h1>{post.data.title}</h1>
          <p>ups: {post.data.ups}</p>
          <p>downs: {post.data.downs}</p>
          <img src={post.data.thumbnail} alt="thumbnail" />
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.handleClick}>back to subreddits</button>
        <h1>{this.props.subreddits.selectedSubreddit[0].data.subreddit}</h1>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    subreddits: state.subreddits
  };
};

export default connect(mapStateToProps)(Subreddit);
