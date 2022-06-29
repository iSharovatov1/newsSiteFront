import { createReducer } from '@reduxjs/toolkit';
import GET_USERS from './constants';

const initialState = {
  news: [],
  count: 0,
};

const reducers = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_USERS.PENDING, (state) => state)
    .addCase(GET_USERS.FULFILLED, (state, action) => ({ ...state, news: action.payload }))
    .addCase(GET_USERS.REJECTED, (state) => state);
});

export default reducers;
