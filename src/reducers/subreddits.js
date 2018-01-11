const subreddits = (
  state = {
    subreddits: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_SUBREDDIT':
      return { ...state, subreddits: action.payload };
    default:
      return state;
  }
};

export default subreddits;
