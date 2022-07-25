import { call, all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([call(newsSaga), call(userSaga)]);
}

export default rootSaga;
