import React, { useState } from 'react'
import { Paper } from '@mui/material'
import dessert from "./../Assets/Full_English_breakfast1.png"
import breakfast from "./../Assets/easy-lunch-ideas.png"
import lunch from "./../Assets/lunch.png"
import sds from "./../Assets/sds.png"
import salads from "./../Assets/salads.png"



import "../Components/Home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate()
    const dessertt = () => {
        navigate("/home/dessert")
    }

    const breakfastt = () => {
        navigate("/home/breakfast")
    }

    const lunchh = () => {
        navigate("/home/lunch")
    }

    const salads = () => {
        navigate("/home/salads")
    }

    const softt = () => {
        navigate("/home/soft")
    }

   
    
  return (
    <>
    <div className="home">
    <div className="container-fluid">
        <div className="row g-0 m-0">
            <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-2 p-0' onClick={dessertt}>

            <Paper elevation={5} className='card' >
                <img src={dessert} sizes='100%'/>
            </Paper>
            <p className='text-center text-white font-weight-bold' >Dessert</p>
            </div>

            <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-3 p-0' onClick={breakfastt}>

            <Paper elevation={5} className='card' >
                <img src={breakfast} width={"100%"} />
            </Paper>
            <p className='text-center text-white'>Breakfast</p>
            </div>

            <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-3 p-0' onClick={lunchh}>

                <Paper elevation={5} className='card' >
                    <img src={lunch} width={"100%"} />
                </Paper>
                <p className='text-center text-white'>Lunch</p>
                </div>

                <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-3 p-0' onClick={salads}>

                <Paper elevation={5} className='card' >
                    <img src={lunch} width={"100%"} />
                </Paper>
                <p className='text-center text-white'>Salads</p>
                </div>

                <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-3 p-0' onClick={softt}>

                <Paper elevation={5} className='card' >
                    <img src={sds} width={"100%"} />
                </Paper>
                <p className='text-center text-white'>Soft Drinks</p>
                </div>

                <div className='col-10 col-sm-5 col-md-5 col-lg-3 my-3 mx-3 p-0'>

                <Paper elevation={5} className='card' >
                    <img src={salads} width={"100%"} />
                </Paper>
                <p className='text-center text-white'>Salads</p>
                </div>


            

        </div>
    </div>
    </div>
   
    </>
  )
}

export default Home