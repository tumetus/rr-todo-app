import * as TYPES from './types';

export const updateText = (text) => {
  return {
    type: TYPES.UPDATE_TEXT,
    payload: text
  };
}

export const addTodo = () => {
  return {
    type: TYPES.ADD_TODO
  };
}

export const toggleTodoDone = (text) => {
  return {
    type: TYPES.TOGGLE_TODO_DONE,
    payload: text
  }
};
