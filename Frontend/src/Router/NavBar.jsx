// import React from 'react'
// import {NavLink} from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import "./NavBar.css"
import favicon from "../Assets/favicon.ico";


const NavBar = ({setAuth,auth, data}) => {
  const [isNav, setIsNav] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [search, setSearch] = useState(false)

  const searched = () => {
    setSearch(!search)
  }


const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}

  return (


    <>
    
      <div className='navbar '>
        
      <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon className='menuicon text-primary'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
         <ul>
         <li className='mx-1'><img src={favicon} width={"40vw"}/> </li>

             <li><NavLink to="/home" className=" nav-item bi bi-house-door col-2 h4" onClick={handleShowNavbar}></NavLink></li>

             <li><NavLink to="/about" className=" nav-item bi bi-heart-fill h4" onClick={handleShowNavbar}></NavLink></li>
             {/* <li><NavLink to="/quiz" className=" nav-item" onClick={handleShowNavbar}>QUIZ</NavLink></li> */}

            
        

             </ul>
           
         </div>


         <div className='d-flex float-end'>
         {search && <input type="search" />}
             <i className=' bi bi-search justify-content-end' onClick={searched}></i>             

             </div>

             {/* <ul>
    <div className="dropdown" style={{float: "right"}}>

  <div className="dropdown-content">
    <NavLink to="/profile/none" className="profile bg-black"><i className="bi bi-person-circle text-black"> Profile</i></NavLink>
     <a href="#">Link 3</a> 
  </div>
</div>
    </ul> */}
     </div> 
    
     </>

  )



}
  


export default NavBar
