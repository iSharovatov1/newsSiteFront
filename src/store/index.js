import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  },
);

sagaMiddleware.run(mySaga);

export default store;
