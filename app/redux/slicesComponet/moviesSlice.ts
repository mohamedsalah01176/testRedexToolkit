import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let insailState={trendingMovies:[],loading:false,error:""}

//get movies
export  let getMovies:any=createAsyncThunk('movies/getMovies', async(arg,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try{
        let {data}=await axios.get(`http://localhost:3005/movies`)
        return data
    }catch(error:any){
        return rejectWithValue(error.message)
         
    }
})


//insert movies


export let insertMovies:any=createAsyncThunk("movies/insertMovies",async (arg:any,thunkAPI)=>{
    const {rejectWithValue,getState}=thunkAPI
    arg.userName=(getState() as any).auther.useName
    try{
        let {data}=await axios.create({baseURL:"http://localhost:3005",headers:{"content-type":"application/json"}}).post("movies",JSON.stringify(arg))
        // console.log(data)
        return data
    }catch(error:any){
        return rejectWithValue(error.message)
    }
})

//delete movies


export let deleteMovies:any=createAsyncThunk("movies/deleteMovies",async (arg:any,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    console.log(arg)
    try{
        let {data}=await axios.get(`http://localhost:3005/movies/${arg}`)
        console.log(data)
        return data
    }catch(error:any){
        return rejectWithValue(error.message)
    }
})


//read movie
export let raedMovie:any=createAsyncThunk("movies/raedMovie",async(arg,action)=>{
    let {data}=await axios.get(`http://localhost:3005/movies/${arg}`)
    console.log(data)
    return data
})
let movies=createSlice({
    name:'movies',
    initialState:insailState,
    reducers:{
        
    },
    extraReducers:(builder)=> {
        //get movies
        builder.addCase(getMovies.pending, (state, action)=>{
            state.loading=true
        })
        builder.addCase(getMovies.fulfilled, (state, action)=>{
            state.loading=false
            state.trendingMovies=action.payload
        })
        builder.addCase(getMovies.rejected, (state, action)=>{
            state.loading=false
            state.error=action.payload
        })

        //insertMovies
        builder.addCase(insertMovies.pending,(state:any,action:any)=>{
            state.loading=true
        })
        builder.addCase(insertMovies.fulfilled,(state:any,action:any)=>{
            state.loading=false
            state.trendingMovies.push(action.payload)
        })
        builder.addCase(insertMovies.rejected,(state:any,action:any)=>{
            state.loading=false
            state.error=action.payload
        })

        //deleteMovies
        builder.addCase(deleteMovies.pending,(state:any,action:any)=>{
            state.loading=true
        })
        builder.addCase(deleteMovies.fulfilled,(state:any,action:any)=>{
            state.loading=false
            state.trendingMovies= state.trendingMovies.filter((item:any)=> item.id !== action.payload.id) 
        })
        builder.addCase(deleteMovies.rejected,(state:any,action:any)=>{
            state.loading=false
            state.error=action.payload
        })

        //read movies
        builder.addCase(raedMovie.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(raedMovie.fulfilled,(state,action)=>{
            state.loading=false
        })
        builder.addCase(raedMovie.rejected,(state,action)=>{
            state.loading=false
        })

    }
})
export let moviesReducer=movies.reducer
