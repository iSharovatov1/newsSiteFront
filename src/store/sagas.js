import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getNews } from './actions';

function* fetchNews(action) {
   try {
      const news = yield call(getNews, action.payload);
      yield put({type: "NEWS_FETCH_SUCCEEDED", news: news});
   } catch (e) {
      yield put({type: "NEWS_FETCH_FAILED", message: e.message});
   }
};

function* mySaga() {
  yield takeEvery("NEWS_FETCH_REQUESTED", fetchNews);
};

export default mySaga;
