import React from 'react';

class LandingPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <a href="https://www.reddit.com/api/v1/authorize?client_id=juuljOApYa0Y_w&response_type=code&state=jesse&redirect_uri=http://localhost:3000/success&duration=temporary&scope=read">Log In</a>
      </div>
    );
  }
}

export default LandingPage;
