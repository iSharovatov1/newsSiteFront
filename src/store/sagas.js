import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllnews } from '../axiosRequests';
import GET_ALL_NEWS from './constants';

function* fetchNews(action) {
  try {
    const news = yield call(getAllnews, action.payload);
    yield put({ type: GET_ALL_NEWS.FULFILLED, news });
  } catch (e) {
    yield put({ type: GET_ALL_NEWS.REJECTED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(GET_ALL_NEWS.PENDING, fetchNews);
}

export default mySaga;
