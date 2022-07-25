import * as ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
  news: [],
  loading: false,
  error: null,
};

function reducers(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.NEWS_FETCH_REQUESTED:
      return { ...state, loading: true, error: null };
    case ACTION_TYPES.NEWS_FETCH_SUCCEEDED: {
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    }
    case ACTION_TYPES.NEWS_FETCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }
    default: return state;
  }
}

export default reducers;
