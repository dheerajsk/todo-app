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
        add:(state, action)=>{
            state.value.push(action.payload);
            console.log(state.value);
        }
    }
})

export const {add} = todoSlice.actions;

export default todoSlice.reducer;
