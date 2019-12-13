import { all } from 'redux-saga/effects';
import { watchOpenModalSaga, watchCloseModalSaga } from './modalSaga';
import { watchPostRequestsSaga, watchFetchRequestsSaga } from './requestSaga';

function* rootSaga() {
  yield all([
    watchOpenModalSaga(),
    watchCloseModalSaga(),
    watchPostRequestsSaga(),
    watchFetchRequestsSaga()
  ]);
}

export default rootSaga;
