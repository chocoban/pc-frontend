import {
  put, takeLatest, call
} from 'redux-saga/effects';

import { FETCH_REQUESTS, POST_REQUEST } from '../constants';
import {
  postRequestSuccess, postRequestFailure,
  fetchRequestsSuccess, fetchRequestsFailure
} from '../actions';
import RequestsApi from '../../services/request';
import errorHandler from '../../helpers/errorHandler';

export function* postRequestsSaga(action) {
  let response;
  try {
    const {
      reason, payment
    } = action;
    const pay = parseInt(action.amount, 10);
    response = yield call(RequestsApi.postRequest, { pay, reason, payment });
    if (response.data) {
      yield put(postRequestSuccess(response.data));
    }
  } catch (err) {
    if (response.errors) {
      const { errors } = response;
      errorHandler(errors);
      yield put(postRequestFailure(errors));
    }
  }
}

export function* watchPostRequestsSaga() {
  yield takeLatest(POST_REQUEST, postRequestsSaga);
}
export function* fetchRequestsSaga() {
  let response;
  try {
    response = yield call(RequestsApi.getAllRequests);
    if (response.data) {
      yield put(fetchRequestsSuccess(response.data));
    }
  } catch (err) {
    if (response.errors) {
      const { errors } = response;
      errorHandler(errors);
      yield put(fetchRequestsFailure(errors));
    }
  }
}

export function* watchFetchRequestsSaga() {
  yield takeLatest(FETCH_REQUESTS, fetchRequestsSaga);
}
