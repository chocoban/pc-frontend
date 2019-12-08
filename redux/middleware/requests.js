import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_REQUESTS, POST_REQUEST } from '../constants/index';
import {
  postRequestSuccess, postRequestFailure,
  fetchRequestsSuccess, fetchRequestsFailure
} from '../actions';
import errorHandler from '../../helpers/errorHandlers';
import RequestsApi from '../../services/request';

export function* postRequestsSaga(action) {
  try {
    const { amount, reason, payment } = action.payload;
    const response = yield call(RequestsApi.postRequest, { amount , reason, payment })
    yield put(postRequestSuccess(response));
  } catch (err) {
    const errMsg = errorHandler(err);
    yield put(postRequestFailure(errMsg));
  }
}

export function* watchPostRequestsSaga() {
  yield takeLatest(POST_REQUEST, postRequestsSaga);
};
export function* fetchRequestsSaga() {
  try {
    const response = yield call(RequestsApi.getAllRequests);
    yield put(fetchRequestsSuccess(response));
  } catch (err) {
    const errMsg = errorHandler(err);
    yield put(fetchRequestsFailure(errMsg));
  }
}

export function* watchFetchRequestsSaga() {
  yield takeLatest(FETCH_REQUESTS, fetchRequestsSaga);
};
