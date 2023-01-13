import { createSlice } from "@reduxjs/toolkit"

// Data or State.
const initialState={
    value:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        // Actions to be handled by reducer.
    }
})

export default todoSlice.reducer;
