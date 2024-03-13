
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { useNavigate, BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

import "@fontsource/roboto";
import "../src/index.css";
import "./App.css";
import Home from './Components/Home';
import NavBar from './Router/NavBar';
import MenuList from './Components/MenuList';
import Gallery from './Components/Gallery.jsx';
import AboutUS from './Components/AboutUS';
import Footer from './Components/Footer.jsx';



function App() {
  
  return (
    
    <>
    <div>
       <NavBar/>
    
      <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" defaults element={<Home />} />
        <Route path="/menu" defaults element={<MenuList />} />
        <Route path="/gallery" defaults element={<Gallery />} />
        <Route path='/about' element={<AboutUS />}  />

      </Routes>
    </div>
     <>
     </>
     <Outlet />
    </>
  );
}

export default App;
