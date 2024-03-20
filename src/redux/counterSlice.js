import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter App",
  initialState: {
    value: 0,
  },
  /* actions are created inside reducers key */
  reducers: {
    // function to incriment
    incriment:(state,action)=>{
        state.value+=action.payload
    },
    // function to decriment
    decriment:(state,action)=>{
        state.value-=action.payload
    },
    // function to reset
    reset:(state)=>{
        state.value = 0
    }
  },
});

// actions are used by components to access the state
export const {incriment,decriment,reset} = counterSlice.actions
// reducer is required for store to change the vlue of state
export default counterSlice.reducer
