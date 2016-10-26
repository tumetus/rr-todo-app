import * as TYPES from '../actions/types';

const INITIAL_STATE = { text: '', todos: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TYPES.UPDATE_TEXT:
      return { ...state, text: action.payload };
    case TYPES.ADD_TODO:
      return { ...state, todos: [...state.todos, { text: state.text, done: false }], text: '' };
    case TYPES.TOGGLE_TODO_DONE:
      let todos = [...state.todos];
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].text == action.payload) {
          todos[i].done = !todos[i].done;
          break;
        }
      }
      return { ...state, todos };
    default:
      return state;
  }
};
