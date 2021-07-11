import {combineReducers} from 'redux';
import {STORE_RESTAURANT} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANT:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({records});
