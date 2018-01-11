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

export function sortTopics(topics) {
  topics.map(topic => {
    return topic.subreddits.map(subreddit => {
      return (topic.points += subreddit.data.subscribers);
    });
  });

  let sortedTopics = topics.sort((a, b) => {
    return a.points - b.points;
  });

  console.log(sortedTopics);
  return dispatch => {
    dispatch({ type: 'SORT_TOPICS', payload: sortedTopics.reverse() });
  };
}
