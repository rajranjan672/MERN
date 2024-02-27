
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate, BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

import axios from 'axios';
import "@fontsource/roboto";
import "../src/index.css";
import "./App.css";
import Home from './Components/Home';
import NavBar from './Router/NavBar';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery.jsx';
import AboutUS from './Components/AboutUS';
import Footer from './Components/Footer.jsx';



function App() {

  const [data, setData] = useState([])
  const navigate = useNavigate()


  
  return (
    
    <>
    <div>
       <NavBar/>
    
      <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" defaults element={<Home />} />
        <Route path="/menu" defaults element={<Menu />} />
        <Route path="/gallery" defaults element={<Gallery />} />
        <Route path='/about' element={<AboutUS />}  />

      </Routes>
      <Footer />
    </div>
     <>
     </>
     <Outlet />
    </>
  );
}

export default App;
