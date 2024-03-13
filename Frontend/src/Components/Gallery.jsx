import React from 'react'
import food from "../Assets/food.png"
import food1 from "../Assets/food1.png"
import fries from "../Assets/fries.png"

const Gallery = () => {
  return (
    <div className="container menu">
      <h3>Gallery</h3>
      <div className="row my-2">
        <img src={food} className='col-10 col-sm-10 col-md-5 col-lg-3'/>
        <img src={food1} className='col-10 col-sm-10 col-md-5 col-lg-3'/>
        <img src={fries} className='col-10 col-sm-10 col-md-5 col-lg-3'/>

      </div>
    </div>
  )
}

export default Gallery