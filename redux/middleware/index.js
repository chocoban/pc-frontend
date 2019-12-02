import { all } from 'redux-saga/effects';
import { watchOpenModalSaga, watchCloseModalSaga } from './modalSaga';

function* rootSaga() {
  yield all([
    watchOpenModalSaga(),
    watchCloseModalSaga()
  ]);
}

export default rootSaga;
