import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}, action) => {
    return state;
  }
});

export default rootReducer;
