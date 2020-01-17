import { put, takeLatest } from 'redux-saga/effects';
import { OPEN_MODAL, CLOSE_MODAL } from '../constants/index';
import {
  openModalSuccess, openModalFailure, closeModalSuccess
} from '../actions';

export function* openModalSaga() {
  try {
    yield put(openModalSuccess());
  } catch (err) {
    yield put(openModalFailure(err));
  }
}

export function* watchOpenModalSaga() {
  yield takeLatest(OPEN_MODAL, openModalSaga);
}

export function* closeModalSaga() {
  try {
    yield put(closeModalSuccess());
  } catch (err) {
    return err;
  }
}

export function* watchCloseModalSaga() {
  yield takeLatest(CLOSE_MODAL, closeModalSaga);
}
