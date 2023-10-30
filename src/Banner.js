import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests, { baseurl } from './Request';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
   const [movie,setMovie]=useState([]);
   useEffect(()=>{
    async function fetchdata(){
     const req= await axios.get(`${baseurl}/${requests.Originals}`);
      setMovie(req.data.results);
    return req;
    }
    fetchdata();
   },[]);
console.log(movie);
    const truncate=(s,n)=>{
    return s.length>n?s.substr(0,n)+'...':s;
    }
  return (
    <>
   
    <div className='banner'>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
            {
                movie.map(moviee=>(
    
        <div className='banner-contents' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${moviee.backdrop_path}")`,
    // backgroundSize:"cover",
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat",
              backgroundSize:"100% 100%" ,
              zIndex:"-1"
              }}>
           <div className='banner-titlee'>
             <h1>{moviee.original_name}</h1>
           </div>
           <div className='banner_button'>
             <button >Play</button>
             <button>My list</button>
           </div>
           <div className='banner_description'>
              {truncate(moviee?.overview,150)}
              
           </div>
            
        </div>
    
    
                ))
        
            }
      </Carousel>
      {/* <div className='fadebottom'></div> */}
    </div>
    
    
    </>
  )
}

export default Banner;
