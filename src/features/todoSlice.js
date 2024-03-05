import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDoItems: []
}

export const toDoSlice = createSlice({
    name: "ToDo List",
    initialState,
    reducers: {
        addToList: (state, action) => {
            return {
                ...state, 
                toDoItems: [...state.toDoItems, {text: action.payload}]}
        },
         clearList: () => {
            return {toDoItems: []}
         }
    }
})

export const { addToList, clearList } = toDoSlice.actions

export default toDoSlice.reducer