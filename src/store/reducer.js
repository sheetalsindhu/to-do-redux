import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "./ActionTypes";

// Reducer
const initState = {
  todos: [],
};

const reducer = (state = initState, { type, payload }) => {
  console.log(state, type, payload);
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload) {
            return {
              ...item,
              status: !item.status,
            };
          }

          return item;
        }),
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => {
          if (item.id !== payload) {
            return item;
          }
        }),
      };
    }

    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              title: payload.title,
            };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
