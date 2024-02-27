import { Avatar, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])

  return (
    <div classemail="container">
    <div className="row">
      <Paper elevation={20} className="cardd col-4 mx-auto my-5">
        <div className="card-header">
        <Avatar className='mx-auto'>
      </Avatar>
        <h3 className='text-center text-capitalize text-primary'> {data.name}</h3>

        </div>
      <div className="card-body">
      

      </div>
    </Paper>
        
   
    </div>
  </div>
  )
}

export default About