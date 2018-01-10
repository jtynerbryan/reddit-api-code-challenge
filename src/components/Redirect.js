import React from 'react';

class Redirect extends React.Component {
  state = {
    code: '',
    redditAppState: 'jesse'
  };

  componentDidMount() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let code = url.searchParams.get('code');
    let urlStateParam = url.searchParams.get('state');
    let error = url.searchParams.get('error');

    if (error === null && urlStateParam === this.state.redditAppState) {
      this.setState({
        code: code
      });
    }
  }

  componentDidUpdate() {
    let postData = {
      headers: {
        Authorization: {
          user: 'juuljOApYa0Y_w',
          password: 'Rd76aou4XMMlCoZ15Q7UQskJiKY'
        }
      },
      method: 'POST',
      data: JSON.stringify({
        grant_type: 'authorization_code',
        code: this.state.code,
        redirect_uri: 'http://localhost:3000/success'
      })
    };

    fetch('https://www.reddit.com/api/v1/access_token', postData)
      .then(res => res.json)
      .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <h1>Redirect</h1>
      </div>
    );
  }
}

export default Redirect;
