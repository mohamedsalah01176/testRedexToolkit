"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decreament2, decreamentValue2, increament2, increamentValue2 } from "./redux/slicesComponet/counterSlice";
// import { getMovies } from "./redux/slicesComponet/moviesSlice";
import { useEffect, useState } from "react";
import {  deleteMovies, getMovies, insertMovies, raedMovie } from "./redux/slicesComponet/moviesSlice";


export default function Home() {
  let {count}:any=useSelector<any>((state)=>state.x)
  let movies:any=useSelector<any>((state)=>state.movies)

  const [bookRead,setBookRead]=useState<any>({})
  // let loading:any=useSelector<any>((state)=>state.isloading)
  let dispatch=useDispatch()

  function increase(){
    dispatch(increament2())
  }
  function decrease(){
    dispatch(decreament2())
  }
  function increaseByvalue(value:any){
    dispatch(increamentValue2(value))
  }
  function decreaseByvalue(value:any){
    dispatch(decreamentValue2(value ))
  }
  useEffect(()=>{
    dispatch(getMovies("todos"))
    
  },[dispatch])
  console.log(movies.error)
  return (
    <>
    {movies.error ?
  <h1>{movies.error}</h1>
  :
  <>
  <h1>count {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={()=>increaseByvalue(5)}>+5</button>
      <button onClick={()=>decreaseByvalue(3)}>-3</button>
      <button onClick={()=>dispatch(insertMovies({"title":"mohamed"}))} className="bg-blue-500 p-3 rounded-lg ">add book</button>
      
      <div className="flex gap-10">
        <div>
            {movies.loading === true  ?"loading":
          <>
            {movies.trendingMovies.length >1?
            <>
            {movies.trendingMovies.map((item:any,index:number)=>{
                return(
                  <div key={index}>
                    <h1 >{item.title}</h1>
                    <button onClick={()=>dispatch(deleteMovies(item.id)).then((data:any)=>alert(data.payload.title))} className="bg-blue-500 p-3 rounded-lg ">delete book</button>
                    <button onClick={()=>dispatch(raedMovie(item.id)).then((data:any)=>setBookRead(data.payload))} className="bg-red-500 p-3 rounded-lg ">read book</button>
                  </div>
                  
                )
                
              })}
            </>
            :
              <h1>no found book</h1>
            }
            
          </>
          }
        </div>
        <div>
          <h1>Read book</h1>
          <h1>{bookRead.id}</h1>
          <h1>{bookRead.title}</h1>
          
        </div>
      </div>
  </>
  
  }
    
      
    </>
  );
}
