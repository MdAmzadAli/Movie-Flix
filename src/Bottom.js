import React, { useEffect, useState } from 'react'
import requests, { baseurl } from './Request';
import axios from 'axios';
import Card from './Card';
import './Bottom.css'
function Bottom({title,fetchurl}) {
  const [movies,setmovies]=useState([]);
  useEffect(()=>{
  async function fetch_data(){
    const req=await axios.get(`${baseurl}/${fetchurl}`);
    setmovies(req.data.results);
    return req;
  }
  fetch_data();
  },[]);
  console.log(movies);
  return (
    <div className='body'>
      <div className='title'>{title}</div>
       
      <div className='content'>
        {movies.map((movie)=>(
          
         <img className='imagee' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
         
        ))}
       </div>
    </div>
  )
}

export default Bottom;
