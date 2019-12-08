import { put, takeLatest } from 'redux-saga/effects';
import { OPEN_MODAL, CLOSE_MODAL } from '../constants/index';
import { openModalSuccess, openModalFailure, closeModalSuccess } from '../actions';
import errorHandler from '../../helpers/errorHandlers';

export function* openModalSaga() {
  try {
    yield put(openModalSuccess());
  } catch (err) { 
    const errMsg = errorHandler(err);
    yield put(openModalFailure(errMsg));
  }
}

export function* watchOpenModalSaga() {
  yield takeLatest(OPEN_MODAL, openModalSaga);
}

export function* closeModalSaga(){
  try {
    yield put(closeModalSuccess());
  } catch (err) { 
    const errMsg = errorHandler(err);
    return errMsg;
  }
}

export function* watchCloseModalSaga() {
  yield takeLatest(CLOSE_MODAL, closeModalSaga);
}
