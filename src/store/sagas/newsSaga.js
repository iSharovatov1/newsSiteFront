import { call, put, takeEvery } from 'redux-saga/effects';

import * as ACTION_TYPES from '../../constants/actionTypes';
import { getNewsSuccess, getNewsFailed } from '../action/newsActions';
import getNews from '../../api/newsApi';

function* fetchNewsWorker(action) {
  try {
    const news = yield call(getNews, action.payload);
    yield put(getNewsSuccess(news));
  } catch (e) {
    yield put(getNewsFailed({ message: e.message }));
  }
}

function* newsSaga() {
  yield takeEvery(ACTION_TYPES.NEWS_FETCH_REQUESTED, fetchNewsWorker);
}

export default newsSaga;
