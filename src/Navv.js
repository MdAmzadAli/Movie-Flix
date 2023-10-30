import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/counterSlice';
import { useNavigate } from 'react-router-dom';
function Navv() {
    const [checkscroll,setCheckscroll]= useState(true);
    function truncate(){
        if(window.scrollY>100){setCheckscroll(true);}
        else setCheckscroll(false);
    }
    useEffect(()=>{
        if(checkscroll)console.log("hello");
        window.addEventListener('scroll',truncate);
        return ()=>{
        window.removeEventListener('scroll',truncate);
    };
    },[]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const act=()=>{
    //  dispatch(logout);
    // navigate('/');
    console.log('hell  o');
    }
    // console.log('user',useSelector(selectUser));
    // console.log(checkscroll);
  return (
    <div className={`nav ${checkscroll && "nav__black"}`}>
      <div className='nav_content'>
        <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='loading'/>
        <button onClick={act}>LogOut</button>
      </div>
    </div>

  )
}

export default Navv;
