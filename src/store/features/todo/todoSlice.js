// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), name: "Wake up", completed: false },
    { id: nanoid(), name: "make coffee", completed: false },
    { id: nanoid(), name: "play tennis", completed: false },
  ],

  toggleForm: true,
  todoUpdate: {},
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    todosCleared: (state) => {
      state.todos = [];
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleInputForm: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToUpdate.name = action.payload.name;
      state.toggleForm = !state.toggleForm;
    },
    todoToggled: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  }
});

export const {
  todoAdded,
  todosCleared,
  todoDeleted,
  toggleInputForm,
  todoUpdated,
  todoToggled,
  setFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
