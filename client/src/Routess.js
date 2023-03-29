import React from 'react'
import { Routes,Route } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
const Routess = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
            
    </Routes>
   
  )
}

export default Routess;