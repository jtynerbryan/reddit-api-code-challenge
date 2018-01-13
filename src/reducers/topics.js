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
      debugger;
      return { ...state, topicsWithSubreddits: action.payload, sorted: true };
    default:
      return state;
  }
};

export default topics;
