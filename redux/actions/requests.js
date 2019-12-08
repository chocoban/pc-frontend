import {
  FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILURE, POST_REQUEST,
  POST_REQUEST_SUCCESS, POST_REQUEST_FAILURE
} from '../constants';

export const postRequest = (amount, reason, payment) => ({
  type: POST_REQUEST,
  amount,
  reason,
  payment
});

export const postRequestSuccess = (res) => ({
  type: POST_REQUEST_SUCCESS,
  res
});

export const postRequestFailure = (err) => ({
  type: POST_REQUEST_FAILURE,
  err
});

export const fetchRequests = () => ({
  type: FETCH_REQUESTS
});

export const fetchRequestsSuccess = (res) => ({
  type: FETCH_REQUESTS_SUCCESS,
  payload: res
});

export const fetchRequestsFailure = err => ({
  type: FETCH_REQUESTS_FAILURE,
  err
});
