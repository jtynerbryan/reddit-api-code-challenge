const topics = (
  state = {
    names: [
      'architecture',
      'art',
      'business',
      'education',
      'entertainment',
      'gaming',
      'general',
      'hobbies and interests',
      'law',
      'lifestyle',
      'locations',
      'meta',
      'music',
      'news and politics',
      'science',
      'social science and humanities',
      'sports',
      'technology',
      'travel',
      'other'
    ]
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default topics;
