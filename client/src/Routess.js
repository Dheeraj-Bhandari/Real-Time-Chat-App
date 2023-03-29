import React from 'react'
import { Routes,Route } from 'react-router'
import ChatBoard from './pages/ChatBoard'
import Login from './pages/Login'
import Signup from './pages/Signup'
const Routess = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/charboard' element={<ChatBoard/>} />
            
    </Routes>
   
  )
}

export default Routess;