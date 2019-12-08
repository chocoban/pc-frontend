import {
  POST_REQUEST, POST_REQUEST_SUCCESS, POST_REQUEST_FAILURE,
  FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_FAILURE
} from '../constants';

const initialState  = {
  amount: '',
  reason: '',
  payment: '',
  err: []
};

const requestReducer = (state = initialState, action) => {
  const { err, type, amount, reason, payment, res } = action;
  switch(type){
    case POST_REQUEST:
    return {
      ...state,
      amount,
      reason,
      payment,
      loading: true
    };
  case POST_REQUEST_SUCCESS:
    return { ...state,
      id: res.id,
      name: res.name,
      userEmail: res.email,
      country: res.country,
      status: res.status,
      loading: false
    };
  case POST_REQUEST_FAILURE:
    return { ...state, err };
  default:
    return state;
  }
};

export default requestReducer;
