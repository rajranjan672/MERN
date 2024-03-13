import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Menu.css"
import CreateMenu from './CreateMenu'

const MenuList = () => {
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
    <CreateMenu gett={gett} />

      <h2 className='text-center text-danger'>MenuList</h2>
      <div className="row">
        {menu.map((item) => {
          return(
            <div key={item.id} className="card col-10 col-sm-4 col-md-4 col-lg-3 mx-5 my-2">
            <div className="card-title">
              <h3 className='text-center'>{item.title}</h3>
            </div>
            <div className="card-body">
              <h4>Description: {item.description}</h4>
            </div>
            <button className="btn btn-primary col-4 mb-1">RS: {item.price}</button>
            </div>
          )
        })}
       
       
      </div>
    </div>
  )
}

export default MenuList