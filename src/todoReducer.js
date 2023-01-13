import { createSlice } from "@reduxjs/toolkit"

// Data or State.
const initialState={
    value:["Call the Client", "Attend Meeting"]
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
});

// Selector to get data from store.
export const todoSelector = (state)=> state.todo.value;

export const {add} = todoSlice.actions;

export default todoSlice.reducer;
