const initialState = {
  news: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_NEWS_PENDING':
      return state;
    case 'GET_ALL_NEWS_FULFILLED':
      return { ...state, news: action.news };
    case 'GET_ALL_NEWS_REJECTED':
      return state;
    default:
      return state;
  }
}

export default reducers;
