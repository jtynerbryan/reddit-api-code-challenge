const topics = (
  state = {
    topicsWithSubreddits: [],
    sorted: false
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TOPICS_WITH_SUBREDDITS':
      return { ...state, topicsWithSubreddits: action.payload };
    case 'SORT_TOPICS_AND_SUBREDDITS':
      return { ...state, topicsWithSubreddits: action.payload, sorted: true };
    case 'ADD_TOPIC':
      let topicsWithSubreddits = [...state.topicsWithSubreddits, action.payload];

      //re-sort topics and subreddits

      topicsWithSubreddits.map(topic => {
        return topic.subreddits.map(subreddit => {
          return (topic.points += subreddit.data.subscribers);
        });
      });

      let sortedTopics = topicsWithSubreddits.sort((a, b) => {
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

      return { ...state, topicsWithSubreddits: topicsWithSubreddits.reverse() };
    default:
      return state;
  }
};

export default topics;
