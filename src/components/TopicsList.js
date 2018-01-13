import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSubredditListToRender, addTopic } from '../actions/index';
import ReactAutocomplete from 'react-autocomplete';

class TopicsList extends React.Component {
  state = {
    value: '',
    topics: []
  };

  componentDidMount() {
    if (this.props.topics.topicsWithSubreddits.length === 0) {
      this.props.history.push('/');
    } else {
      let topics = this.props.topics.topicsWithSubreddits.map(topic => {
        return { label: topic.name };
      });
      this.setState({
        topics: topics
      });
    }
  }

  handleClick = (topic, index) => {
    this.props.setSubredditListToRender(topic, this.props.topics.topicsWithSubreddits[index]);

    this.props.history.push('/subreddit-list');
  };

  handleSubmit = e => {
    e.preventDefault();
    let value = this.state.value;
    let topics = this.props.topics.topicsWithSubreddits.map(topic => {
      return topic.name;
    });
    if (topics.includes(value)) {
      this.props.setSubredditListToRender(value, this.props.topics.topicsWithSubreddits[topics.indexOf(value)]);

      this.props.history.push('/subreddit-list');
    } else {
      this.props.addTopic(value, this.props.topics.topicsWithSubreddits);
    }
  };

  render() {
    let topicList = this.props.topics.topicsWithSubreddits.map((topic, index) => {
      return (
        <div key={index} className="topic-list">
          <h1 onClick={() => this.handleClick(topic.name, index)} className="topic">
            {index + 1}. {topic.name.toUpperCase()} ({topic.points} points)
          </h1>
        </div>
      );
    });
    return (
      <div>
        <h1>Topic List (click for relevant subreddits)</h1>
        <h4>Search Topics</h4>
        <form onSubmit={this.handleSubmit}>
          <ReactAutocomplete
            items={this.state.topics}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
              <div key={item.id} style={{ backgroundColor: highlighted ? 'white' : 'transparent', color: 'black' }}>
                {item.label}
              </div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
          <input type="submit" value="submit" />
        </form>
        {topicList}
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
  return bindActionCreators(
    {
      setSubredditListToRender,
      addTopic
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
