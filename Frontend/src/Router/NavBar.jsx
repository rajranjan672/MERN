import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const NavBar = (props) => {
    const navigate = useNavigate()

    const [data, setData] = useState([])
  

    
   

  return (
    <>
    <div className='navbar'>
    <div>
         <ul >
             <li><NavLink to="/home" className=" nav-item">Home</NavLink></li>
             <li><NavLink to="/menu" className=" nav-item">Menu</NavLink></li>
             <li><NavLink to="/gallery" className=" nav-item">Gallery</NavLink></li>
             <li><NavLink to="/about" className=" nav-item">About</NavLink></li>

             </ul>
            <ul className='d-flex '>

         </ul>
         </div>

         <ul>
            <div className="dropdown" style={{float: "right"}}>
          <div className="dropdown-content">
          </div>
        </div>
            </ul>
     

    </div>
    
    </>
  )
}

export default NavBar