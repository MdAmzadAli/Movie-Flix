import React, { useRef, useState } from 'react'
import './SignUp.css'
import {auth} from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/counterSlice';
function SignUp() {
    const emailref=useRef(null);
    const passref=useRef(null);
    const navigate=useNavigate();
    const location=useLocation();
    const [go,setgo]=useState(false);
    const dispatch=useDispatch();
    function register(){
        createUserWithEmailAndPassword(auth,emailref.current.value,passref.current.value)
        .then((user)=>{console.log(user);setgo(true);})
        .catch((error)=>{alert(error.message);setgo(false);});
        {go?dispatch(login({
        email:emailref.current.value,
        })):''}
    }
    function validate(){
       signInWithEmailAndPassword(auth,emailref.current.value,
        passref.current.value)
        .then((user)=>{console.log(user);setgo(true);})
        .catch((error)=>{alert("ding ding ding bhosdi");setgo(false);}); 
        {go?dispatch(login({
          email:emailref.current.value,
          })):''}
    }
  return (
    <div className='contents contentt'>
        
      <input ref={emailref} placeholder='Email..' type='email'/>
      <input ref={passref} placeholder='Password..' type='password'/>
      <button onClick={validate}>Sign In</button>
      <div>
        <span className='newto'>New to Netflix?</span>
        <span className='now'onClick={register}>Sign up Now</span>
      </div>
      </div>
    
  )
}

export default SignUp;
