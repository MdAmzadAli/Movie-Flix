import React, { useEffect, useState } from 'react'
import './Card.css'
function Card({ movie }) {
    const [mouseover,setmouseover]=useState(false);
   
    useEffect(()=>{
        const mouse_over=()=>{
         setmouseover(true);
       }
        function mouse_leave(){
          setmouseover(false);
        }
     window.addEventListener('mouseover',mouse_over);
     window.addEventListener('mouseleave',mouse_leave);
     return ()=>{
      window.removeEventListener('mouseover',mouse_over);
      window.removeEventListener('mouseleave',mouse_leave);
     }
      },[])
    const cardclass=`body${mouseover?'hovered':''}`;
    console.log(cardclass);
  return (
    <div className='body' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"
    }}>
      {/* {mouseover?
      (<div className='title'>{movie.original_name}</div>):
      (<div className='content'>
      <div className='name'>{movie.original_name}</div>
        <div className='description'>{movie.overview}</div>
        </div>
      )} */}
          {/* <div className='title'>hello</div> */}
    </div>

  )
}

export default Card;
