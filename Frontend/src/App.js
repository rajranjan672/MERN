import React from 'react'
import Landing from './Components/Landing'
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom"
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Header from './Components/Header'
import Breakfast from './Components/Breakfast'
import NavBar from './Router/NavBar'
import Dessert from './Components/Dessert'
import SoftDrinks from './Components/SoftDrinks'
import Lunch from './Components/Lunch'

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
      <Route path="/home/dessert" element={<Dessert />} />
      <Route path="/home/softdrinks" element={<SoftDrinks />} />
      <Route path="/home/lunch" element={<Lunch />} />





      
    </Routes>
    </BrowserRouter>  


    
    </>
  )
}

export default App