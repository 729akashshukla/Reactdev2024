import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login' 
import Register from './pages/Register'


export default function App() {
  return (
    <BrowserRouter>   
    <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/Register" element={<Register/>}> </Route>
        <Route path="*" element={<not found/>}>  </Route>
    </Routes>
     </BrowserRouter>
  )
}
