import { createReducer, createAction } from '@reduxjs/toolkit';
export const chooseState = createAction('choose_state');

const initialState = {
    stateCount: 0
}

const reducers = createReducer(initialState, (builder) => {
    builder
    .addCase(chooseState, (state, action) => {
      return {...state, stateCount: action.payload}
    })
  });

  export default reducers