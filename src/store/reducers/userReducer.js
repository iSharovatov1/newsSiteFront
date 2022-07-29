import * as ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
  user: {},
  userNews: [],
  newsLoading: false,
  userLoading: false,
  newsError: null,
  userError: null,
};

function reducers(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.USER_FETCH_REQUESTED:
      return { ...state, userLoading: true, userError: null };
    case ACTION_TYPES.USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        userError: null,
      };
    }
    case ACTION_TYPES.USER_FETCH_FAILED: {
      return {
        ...state,
        userLoading: false,
        userError: action.payload.message,
      };
    }

    case ACTION_TYPES.USER_NEWS_FETCH_REQUESTED:
      return { ...state, newsLoading: true, newsError: null };
    case ACTION_TYPES.USER_NEWS_FETCH_SUCCEEDED: {
      return {
        ...state,
        userNews: action.payload,
        newsLoading: false,
        newsError: null,
      };
    }
    case ACTION_TYPES.USER_NEWS_FETCH_FAILED: {
      return {
        ...state,
        newsLoading: false,
        newsError: action.payload.message,
      };
    }
    default: return state;
  }
}

export default reducers;
