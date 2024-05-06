"use client"
import { createSlice } from "@reduxjs/toolkit";



let inialState={count:0,userName:"mohamed"}


let counter=createSlice({
    name:"counter",
    initialState:inialState,
    reducers:{
        increament2:(state)=>{ state.count += 1},
        decreament2:(state)=>{ state.count -= 1},
        increamentValue2:(state,action:any)=>{ state.count += action.payload},
        decreamentValue2:(state,action:any)=>{ state.count -= action.payload},
    }
})

export let counterReducer= counter.reducer
export let {increament2,decreament2,increamentValue2,decreamentValue2}= counter.actions
