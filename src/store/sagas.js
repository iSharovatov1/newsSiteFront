import { call, put, takeEvery } from 'redux-saga/effects';
import { changeCount } from './actions';

function* fetchNews(action) {
  try {
    const count = yield call(changeCount, action.payload);
    yield put({ type: 'COUNT_FETCH_SUCCEEDED', count: count.payload });
  } catch (e) {
    yield put({ type: 'COUNT_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('COUNT_FETCH_REQUESTED', fetchNews);
}

export default mySaga;
