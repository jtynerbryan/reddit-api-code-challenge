export function fetchSubredditsbyTopic(topics) {
  let topicsWithSubreddits = [];

  topics.map(topic => {
    return fetch(`https://www.reddit.com/subreddits/search.json?q=${topic.replace(/ /g, '+')}`)
      .then(res => res.json())
      .then(res => topicsWithSubreddits.push({ name: topic, points: 0, subreddits: res.data.children }));
  });

  return dispatch => {
    dispatch({ type: 'ADD_TOPICS_WITH_SUBREDDITS', payload: topicsWithSubreddits });
  };
}

// sort topics by aggregate of subscriber count from relevant subreddits

export function sortTopicsAndSubreddits(topics) {
  topics.map(topic => {
    return topic.subreddits.map(subreddit => {
      return (topic.points += subreddit.data.subscribers);
    });
  });

  let sortedTopics = topics.sort((a, b) => {
    return a.points - b.points;
  });

  // then sort subreddits themselves by subscriber count

  sortedTopics.map(topic => {
    return topic.subreddits
      .sort((a, b) => {
        return a.data.subscribers - b.data.subscribers;
      })
      .reverse();
  });

  return dispatch => {
    dispatch({ type: 'SORT_TOPICS_AND_SUBREDDITS', payload: sortedTopics.reverse() });
  };
}

export function addTopic(topic, topicsWithSubreddits) {
  return dispatch => {
    // fetch subreddits for new topic
    return fetch(`https://www.reddit.com/subreddits/search.json?q=${topic.replace(/ /g, '+')}`)
      .then(res => res.json())
      .then(res => dispatch({ type: 'ADD_TOPIC', payload: { name: topic, points: 0, subreddits: res.data.children } }));
  };
}

export function setSubredditListToRender(topic, subredditList) {
  let payload = { topic: topic, subreddits: subredditList.subreddits };
  return dispatch => {
    dispatch({ type: 'SET_SUBREDDIT_LIST_TO_RENDER', payload: payload });
  };
}

export function setSelectedSubreddit(subreddit) {
  return dispatch => {
    return fetch(`https://www.reddit.com/${subreddit}.json`)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'SET_SELECTED_SUBREDDIT', payload: res.data.children });
      });
  };
}
