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
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => {
                return todo.id !== action.payload
            })
        }
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;