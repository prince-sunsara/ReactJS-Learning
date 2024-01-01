import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [{ id: 1, text: "Hello Worlds!!" }]
// }

export const todoSlice = createSlice({
    name: 'todo',
    // initialState, 
    initialState: {
        todos: [{ id: 1, text: "Hello Worlds!!" }]
    },
    reducers: {
        addTodo: (state, action) => {
            let newTodo = {
                id: nanoid(),
                text: action.payload.text,
            }
            state.todos.push(newTodo);
        },
        removeState: (state, action) => {
            state.todos = state.todos.map(todo => {
                todo.id !== action.payload
            })
        }
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;