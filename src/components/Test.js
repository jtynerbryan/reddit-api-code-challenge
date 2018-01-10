import React from 'react';

class Test extends React.Component {
  state = {};

  componentDidMount() {
    return fetch(`https://www.reddit.com/search.json?q=architecture&restrict_sr=&sort=relevance&t=all&type=sr&count=0&after=t5_3993a`)
      .then(res => res.json())
      .then(res => console.log(res.data.children));
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;
