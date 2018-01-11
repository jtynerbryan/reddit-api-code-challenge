import React from 'react';

class Test extends React.Component {
  state = {
    subreddits: []
  };

  componentDidMount() {
    return fetch(`https://www.reddit.com/subreddits/search.json?q=architecture`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          subreddits: res.data.children
        })
      );
  }

  render() {
    console.log(this.state.subreddits);
    this.state.subreddits.map(subreddit => {
      console.log(`${subreddit.data.display_name_prefixed}, ${subreddit.data.public_description} subscribers: ${subreddit.data.subscribers}`);
    });
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;
