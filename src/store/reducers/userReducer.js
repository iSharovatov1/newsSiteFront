import * as ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
  user: {},
  news: [],
  newsLoading: false,
  userLoading: false,
  error: null,
};

function reducers(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.USER_FETCH_REQUESTED:
      return { ...state, userLoading: true, error: null };
    case ACTION_TYPES.USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };
    }
    case ACTION_TYPES.USER_FETCH_FAILED: {
      return {
        ...state,
        userLoading: false,
        error: action.payload.message,
      };
    }

    case ACTION_TYPES.USER_NEWS_FETCH_REQUESTED:
      return { ...state, newsLoading: true, error: null };
    case ACTION_TYPES.USER_NEWS_FETCH_SUCCEEDED: {
      return {
        ...state,
        news: action.payload,
        newsLoading: false,
        error: null,
      };
    }
    case ACTION_TYPES.USER_NEWS_FETCH_FAILED: {
      return {
        ...state,
        newsLoading: false,
        error: action.payload.message,
      };
    }
    default: return state;
  }
}

export default reducers;
