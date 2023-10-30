import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/counterSlice';
function App() {
  const user=useSelector(selectUser);
  // console.log("seletcuser",selectUser);

  // setuser(selectUser);
  console.log('user',user);
  // console.log(useSelector(selectUser));
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
     dispatch(login({
      uid:userAuth.uid,
      email:userAuth.email,
     }));
      }
      else {
        dispatch(logout);
      }
  
    })
  },[]);
 
  return (
   <Router>
    <Routes>
      {!user?(
        <Route exact path='/' element={<LoginScreen />} />
      ):(
<Route path='/home' element={<HomeScreen />} />
      )}
    
    
    </Routes>
   </Router>
    
  );
}

export default App;
