const subreddits = (
  state = {
    subredditListToRender: {}
  },
  action
) => {
  switch (action.type) {
    case 'SET_SUBREDDIT_LIST_TO_RENDER':
      return { ...state, subredditListToRender: action.payload };
    default:
      return state;
  }
};

export default subreddits;
