import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMidleware = createSagaMiddleware();
const middlewares = [sagaMidleware];

const storeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export const store = createStore(rootReducer, {}, storeEnhancers);

sagaMidleware.run(rootSaga);
