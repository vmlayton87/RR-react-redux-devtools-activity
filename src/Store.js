import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './features/todoSlice'

// configure the store
export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        todoList: todoReducer 
    }
})
