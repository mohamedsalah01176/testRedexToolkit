import { createSlice } from "@reduxjs/toolkit";


const initialState={useName:"mohamed"}



 const autherSlice=createSlice({
    name:"auther",
    initialState,
    reducers:{
        // increace:(state)=>{state.value +1}
    }
})

export const autherReducer=autherSlice.reducer
// export const {increace}=autherSlice.actions