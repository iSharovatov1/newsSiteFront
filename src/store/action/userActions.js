import { createAction } from 'redux-actions';

import * as ACTION_TYPE from '../../constants/actionTypes';

export const getUser = createAction(ACTION_TYPE.USER_FETCH_REQUESTED);
export const getUserSuccess = createAction(ACTION_TYPE.USER_FETCH_SUCCEEDED);
export const getUserFailed = createAction(ACTION_TYPE.USER_FETCH_FAILED);

export const getUserNews = createAction(ACTION_TYPE.USER_NEWS_FETCH_REQUESTED);
export const getUserNewsSuccess = createAction(ACTION_TYPE.USER_NEWS_FETCH_SUCCEEDED);
export const getUserNewsFailed = createAction(ACTION_TYPE.USER_NEWS_FETCH_FAILED);
