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

             <li className='m-auto'><NavLink to="/home" className="nav-item bi bi-house-door col-2 h4 " onClick={handleShowNavbar}></NavLink></li>
            
             <li className='m-auto'><NavLink to="/about" className=" nav-item bi bi-heart-fill h4" onClick={handleShowNavbar}></NavLink></li>
             <li className='m-auto'><NavLink to="/quiz" className=" nav-item bi bi-cart h4" onClick={handleShowNavbar}></NavLink></li>

            
        

             </ul>
           
         </div>


         <div className='d-flex float-end me-5'>
         {search && <input type="search" />}
             <i className=' bi bi-search h4 w-auto px-3' onClick={searched}></i>             
             {/* <NavLink className="profile me-2"><i className="bi bi-person-circle text-black"></i></NavLink> */}
             <ul className='p-0'>
    <div className="dropdown " style={{float: "right"}}>
  <i className=" bi bi-person-circle h4 dropbtn"></i>

  <div className="dropdown-content">
    <h3 className='mx-auto bi bi-person-circle'></h3>
   <NavLink to="/a" className="profile bi bi-telephone-fill w-100 my-1"><span className='text-black'> Help Center</span> </NavLink>
    <NavLink to="/profile/none" className="profile  bi bi-translate w-100 my-1"><span></span> Choose Language</NavLink>
    <NavLink to="/profile/none" className="profile bi bi-heart-fill w-100 my-1"><span className='text-black'> Your Favourites</span></NavLink>
    <NavLink to="/profile/none" className="profile bi bi-info-lg w-100 my-1"><span className='text-black'> About</span> </NavLink>
    <NavLink to="/profile/none" className="profile bi bi-person-circle w-100 my-1"><span className='text-black' > Send Feedback</span> </NavLink>
    <NavLink to="/profile/none" className="profile bi bi-gear-fill w-100 my-1"><span className='text-black'> Settings</span> </NavLink>
    <NavLink to="/profile/none" className="profile bi bi-box-arrow-right w-100 my-1 logout"> <span className='text-black'> Log Out</span></NavLink>


  </div>
</div>
    </ul>
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
