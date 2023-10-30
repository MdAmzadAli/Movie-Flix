import React, { useState } from 'react'
import './LoginScreen.css'
import Image from './image/712404.jpg'
import SignUp from './SignUp'
function LoginScreen() {
    const [sign,setsign]=useState(false);
  return (
    <div className='login' style={{
    backgroundImage:`url(${Image})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"100vh",
    }}>
   
        <div className='overlay'></div>
{sign?(<SignUp/>):
    (
    <div className='all_content'>
     <div className='signin_button'> <button onClick={()=>{setsign(true);}} className='signin'>Sign IN</button></div>
     <div className='content_login'>
      <div className='TV'>Unlimited films,TV programmes and many more</div>
      <div className='anywhere'>Watch anywhere.Cancel anywhere</div>
      <div className='ready'>Ready to watch?Enter your email to create or register your membership</div>
      <div className='button'>
       <input placeholder='Email..' type='email'/>
       <button>Get started</button>
      </div>
      </div>
    </div>)}
    
</div>
  )
}

export default LoginScreen;
