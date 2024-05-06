/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getMovies } from './redux/slicesComponet/moviesSlice'

export default function Component() {
    
    let movies:any =useSelector<any>((state)=>state.movies)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMovies("todos"))
    },[1])
    console.log(movies)
  return (
    <div>
        {movies.trendingMovies.map((item:any,index:number)=>{
        return(
          <h1 key={index}>{item.title}</h1>
        )
        
      })}
    </div>
  )
}
