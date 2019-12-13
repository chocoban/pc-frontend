import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import requestReducer from './requestsReducer';

const rootReducer = combineReducers({
  modalReducer,
  requestReducer
});

export default rootReducer;
