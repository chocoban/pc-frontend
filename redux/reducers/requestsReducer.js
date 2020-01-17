import {
  POST_REQUEST, POST_REQUEST_SUCCESS, POST_REQUEST_FAILURE,
  FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_FAILURE
} from '../constants';

const initialState = {
  amount: '',
  reason: '',
  payment: '',
  err: [],
  data: [],
  loading: false
};

const requestReducer = (state = initialState, action) => {
  const {
    err, type, amount, reason, payment, res
  } = action;
  switch (type) {
  case POST_REQUEST:
    return {
      ...state,
      amount,
      reason,
      payment,
      loading: true
    };
  case POST_REQUEST_SUCCESS:
    return {
      ...state,
      newRequest: res.addRequest,
      id: res.addRequest.id,
      name: 'es',
      email: 'es@gmail.com',
      country: 'Uganda',
      status: 'Open',
      loading: false
    };
  case POST_REQUEST_FAILURE:
    return {
      ...state,
      err,
      loading: false
    };
  case FETCH_REQUESTS:
    return {
      ...state,
      loading: true
    };
  case FETCH_REQUESTS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: res.requests
    };
  case FETCH_REQUESTS_FAILURE:
    return {
      ...state,
      err,
      loading: false
    };
  default:
    return state;
  }
};

export default requestReducer;
