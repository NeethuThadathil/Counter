import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name: "counterApp",
    initialState: {
        value:0
    },
    // actions are define inside this reducers
    reducers:{
        // increment value
        increment:(state,range)=>{
        state.value=state.value+range.payload
        },
        // decrement value
        decrement:(state,range)=>{
            state.value=state.value-range.payload
       },
    //    function to reset value
    reset:(state)=>{
        state.value=0
    }
  }

})
// action is required by the component to perform ingrement and dregremet  and reset
export const {increment,decrement,reset}=counterSlice.actions

//reduer is required by the store
export default counterSlice.reducer;
