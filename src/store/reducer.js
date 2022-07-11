const initialState = {
  news: [],
  loading: false,
  error: '',
};

function reducers(state = initialState, action = null) {
  switch (action.type) {
    case 'NEWS_FETCH_REQUESTED': return { ...state, loading: true, error: '' };
    case 'NEWS_FETCH_SUCCEEDED': return {
      ...state,
      news: action.news,
      loading: false,
      error: '',
    };
    case 'NEWS_FETCH_FAILED': return { ...state, loading: false, error: action.message };
    default: return { ...state };
  }
}

export default reducers;
