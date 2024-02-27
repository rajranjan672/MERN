import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Menu.css"

const Menu = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    gett()
  }, [setMenu])

  const gett = async() => {
    const ress = await axios.get("http://localhost:3001/api/menu/getMenu")
    setMenu(ress.data)
    console.log(ress.data)
  }
  return (
    <div className='container-fluid menu'>
      <h2 className='text-center text-danger'>Menu</h2>
      <div className="row">
        {menu.map((item) => {
          return(
            <div key={item.id} className="card col-10 col-sm-4 col-md-4 col-lg-3 mx-5 my-2">
            <div className="card-title">
              <h3 className='text-center'>{item.title}</h3>
            </div>
            <div className="card-body">
              <p>{item.description}</p>
            </div>
            <button className="btn btn-primary col-4 mb-1">RS 120</button>
            </div>
          )
        })}
       
       
      </div>
    </div>
  )
}

export default Menu