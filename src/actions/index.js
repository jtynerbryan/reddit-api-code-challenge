export default function fetchSubredditsbyTopic(topics) {
  let subreddits = [];

  topics.map(topic => {
    return fetch(`https://www.reddit.com/subreddits/search.json?q=${topic.replace(/ /g, '+')}`)
      .then(res => res.json())
      .then(res => subreddits.push({ topic: topic, subreddits: res.data.children }));
  });

  return dispatch => {
    dispatch({ type: 'ADD_SUBREDDIT', payload: subreddits });
  };
}
