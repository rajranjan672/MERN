import React, { useState } from 'react'
import favicon from "../Assets/favicon.ico";
import "../Components/Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        title: "",
        description: "",
        method: "",
        category: ""
      })

      
      const navigate = useNavigate()

      const signup = () => {
        navigate("/signup")
      }

      const logIn = () => {
        navigate("/home")
      }
      
  return (
    <><div className="login">
       <div className="container-fluid">
        <div className="row">
            <div className="card col-5 mx-auto mt-5">
                <div className="card-title mx-auto pt-4">
                    <img src={favicon}  width={"70vw"}/>
                </div>
                <div className="card-body">
                <form class="row g-3 needs-validation">
                <div className="form-floating">
                      <input type="text" name='FirstName' id="FirstName" className="form-control mx-auto inp py-auto" required
                        placeholder="First Name" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      {/* <label className="form-label mx-3" htmlFor="FirstName">First Name</label> */}

                    </div>
                    <div className="form-floating">
                      <input type="text" name='password' id="password" className="form-control inp mx-auto" required
                        placeholder="Password" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      {/* <label className="form-label mx-3" htmlFor="FirstName">First Name</label> */}

                    </div>
          {/* <div class="form-floating mb-3">
            <input type="text" class="form-control inp" name='description' id="description"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="description" className='form-label mx-3'>Description</label>

          </div> */}

                  <div className="form-check d-flex justify-content-end">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
            Remember Me
          </label>
        </div>

          {/* <label htmlFor="photo">Upload Photo</label> */}
          {/* <input type="file" id='photo' name='photo' accept='image/jped, image/jpg, image/png' onChange={handleFileChange} required /> */}
          <button type='submit' className='btn btn-bg mx-auto' onClick={logIn}>Login</button>
          <p className='text-white'>Forgot password ?</p>

          <button type='submit' className='btn btn-bg mx-auto' onClick={signup}>Sign Up</button>

         
          </form>


                </div>
            </div>
        </div>
    </div>

    </div>
   
    </>
  )
}

export default Login