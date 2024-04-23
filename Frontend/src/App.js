import React from 'react'
import Landing from './Components/Landing'
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom"
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Header from './Components/Header'
import Breakfast from './Components/Breakfast'
import NavBar from './Router/NavBar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />    
    <Routes>
    <Route path="/" element={<Navigate to="/landing"/>} />
      <Route path="/landing" element={<Landing />} />
          
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/breakfast" element={<Breakfast />} />



      
    </Routes>
    </BrowserRouter>  


    
    </>
  )
}

export default App