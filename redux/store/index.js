import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../middleware';

const sagaMiddleware = createSagaMiddleware();

const makeStore = (preloadedState, { isServer, req = null }) => {
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-undef */
  const composeEnhancers = (typeof window !== 'undefined' 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, preloadedState, middleware);

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};

export default makeStore;
