const subreddits = (
  state = {
    subredditListToRender: {},
    selectedSubreddit: []
  },
  action
) => {
  switch (action.type) {
    case 'SET_SUBREDDIT_LIST_TO_RENDER':
      return { ...state, subredditListToRender: action.payload };
    case 'SET_SELECTED_SUBREDDIT':
      return { ...state, selectedSubreddit: action.payload };
    default:
      return state;
  }
};

export default subreddits;
