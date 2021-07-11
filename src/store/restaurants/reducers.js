import {combineReducers} from 'redux';
import {START_LOADING, STORE_RESTAURANT} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANT:
      return action.records;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_RESTAURANT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({records, loading});
