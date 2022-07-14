import { createAction } from 'redux-actions';

import * as ACTION_TYPE from '../../constants/actionTypes';

export const getNews = createAction(ACTION_TYPE.NEWS_FETCH_REQUESTED);
export const getNewsSuccess = createAction(ACTION_TYPE.NEWS_FETCH_SUCCEEDED);
export const getNewsFailed = createAction(ACTION_TYPE.NEWS_FETCH_FAILED);
