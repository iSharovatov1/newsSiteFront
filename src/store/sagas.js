import { call, put, takeEvery } from 'redux-saga/effects';
import getNews from '../api/api';

function* getNewsWorker(action) {
  try {
    const news = yield call(getNews, action.payload);
    yield put({ type: 'NEWS_FETCH_SUCCEEDED', news });
  } catch (e) {
    yield put({ type: 'NEWS_FETCH_FAILED', message: e.message });
  }
}

function* newsSaga() {
  yield takeEvery('NEWS_FETCH_REQUESTED', getNewsWorker);
}

export default newsSaga;
