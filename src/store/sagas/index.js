import { call, all } from 'redux-saga/effects';

import newsSaga from './newsSaga';

function* rootSaga() {
  yield all([call(newsSaga)]);
}

export default rootSaga;
