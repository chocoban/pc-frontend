import {
  OPEN_MODAL_SUCCESS,
  OPEN_MODAL_FAILURE,
  CLOSE_MODAL_SUCCESS
} from '../constants';

const initialState = {
  visible: false,
  error: []
};

const modalReducer = (state = initialState, action) => {
  const {
    error, type, visible
  } = action;
  switch (type) {
  case OPEN_MODAL_SUCCESS:
    return { ...state, visible };
  case OPEN_MODAL_FAILURE:
    return { ...state, error };
  case CLOSE_MODAL_SUCCESS:
    return { ...state, visible };
  default:
    return state;
  }
};

export default modalReducer;
