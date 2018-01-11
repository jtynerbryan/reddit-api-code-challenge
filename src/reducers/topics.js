const topics = (
  state = {
    topicsWithSubreddits: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TOPICS_WITH_SUBREDDITS':
      return { ...state, topicsWithSubreddits: action.payload };
    case 'SORT_TOPICS_AND_SUBREDDITS':
      return { ...state, topicsWithSubreddits: action.payload };
    default:
      return state;
  }
};

export default topics;
