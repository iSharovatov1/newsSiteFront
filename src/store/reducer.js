import { createReducer } from '@reduxjs/toolkit';
import { GET_USERS } from './constants';

const initialState = {
    news: [],
};

const reducers = createReducer(initialState, (builder) => {
    builder
    .addCase(GET_USERS.PENDING, (state, action) => {
      return {...state}
    })
    .addCase(GET_USERS.FULFILLED, (state, action) => {
      return {...state, news: action.payload}
    })
    .addCase(GET_USERS.REJECTED, (state, action) => {
      return {...state}
    })
  });

  export default reducers;
