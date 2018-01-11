import React from 'react';

class Topic extends React.Component {
  render() {
    return (
      <div key={this.props.index}>
        <h1>
          {this.props.index + 1}. {this.props.topic.name.toUpperCase()}, points: {this.props.topic.points}
        </h1>
      </div>
    );
  }
}

export default Topic;
