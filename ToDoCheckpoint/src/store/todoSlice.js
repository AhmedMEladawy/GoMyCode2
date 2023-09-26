import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date(),
        description: action.payload,
        isDone: false,
      };
      state.push(newTodo);
    },
    // doneToggle: (state, action) => {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //
  },
});

export const { addTodo, doneToggle } = todoSlice.actions;
export default todoSlice.reducer;
