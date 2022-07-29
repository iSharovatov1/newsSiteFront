import { call, put, takeEvery } from 'redux-saga/effects';

import * as ACTION_TYPES from '../../constants/actionTypes';
import * as USER_ACTION from '../action/userActions';
import { getUser, getUserNews } from '../../api/userApi';

function* fetchUserWorker({ payload }) {
  try {
    const user = yield call(getUser, payload);
    yield put(USER_ACTION.getUserSuccess(user));
  } catch (e) {
    yield put(USER_ACTION.getUserFailed({ message: e.message }));
  }
}

function* fetchUserNewsWorker({ payload }) {
  try {
    const news = yield call(getUserNews, payload);
    yield put(USER_ACTION.getUserNewsSuccess(news));
  } catch (e) {
    yield put(USER_ACTION.getUserNewsFailed({ message: e.message }));
  }
}

function* userSaga() {
  yield takeEvery(ACTION_TYPES.USER_FETCH_REQUESTED, fetchUserWorker);
  yield takeEvery(ACTION_TYPES.USER_NEWS_FETCH_REQUESTED, fetchUserNewsWorker);
}

export default userSaga;
