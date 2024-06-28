import React, { useEffect, useState } from 'react'
import Filter from './FilterPanel/Filter'
import List from './List/List'
import "./About.css"
import axios from "axios"
import CheckBox from './Checkbox'

const About = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    res()
  }, [setData])

  const res = async() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setData(resp.data)
      console.log(resp.data)
    })
    

  } 
  return (
    <>
    <div className="container-fluid">
      <CheckBox />
      <div className="row p-1">
        {data.map((item) => {
          return (
<div className="card col-10 col-sm-5 col-md-3 col-lg-3 me-auto ms-4 my-1">
      <img src={item.image} height="300px" />
      <div className="card-body">
      <p className='text-danger'>{item.category}</p>

        <p>{item.title}</p>
      <p className=''>{item.rating.rate}</p>
        
      <p className='text-success'>RS: {item.price}</p>
        
      </div>
    </div>

          )
        })}
    
      </div>
    </div>



    {/* </div> */}

    </>
  )
}

export default About