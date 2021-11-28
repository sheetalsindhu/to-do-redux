import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./ActionTypes.js";

import { v4 as uuidv4 } from "uuid";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    status: false,
    id: uuidv4(),
  },
});

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});
