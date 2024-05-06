"use client"
import { counterReducer } from './slicesComponet/counterSlice';
import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from './slicesComponet/moviesSlice';
import { autherReducer } from './slicesComponet/auther';

let store =configureStore({
    reducer:{
        x:counterReducer,
        movies:moviesReducer,
        auther:autherReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store