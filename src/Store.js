import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

// configure the store
export const store = configureStore({
    reducer: counterReducer
})
