import React, { useState } from 'react'
import Home from './Components/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Coursess from './Components/courses/Coursess'
import Signup from './Components/Signup'

import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser ? <Coursess /> : <Navigate to="/signup" />}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   <Toaster />
   </>
  )
}

export default App