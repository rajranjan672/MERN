import React, { useState } from 'react'
import favicon from "../Assets/favicon.ico";
import "../Components/Login.css"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: ""
      })

      const navigate = useNavigate()

      const login = () => {
        navigate("/login")
      }
  return (
    <div className="login">
       <div className="containerfluid">
        <div className="row">
            <div className="card col-5 mx-auto mt-5">
                <div className="card-FirstName mx-auto pt-4">
                    <img src={favicon}  width={"70vw"}/>
                </div>
                <div className="card-body">
                <form class="row g-3 needs-validation">
        <div className="form-floating">
                      <input type="text" name='FirstName' id="FirstName" className="form-control inp" required
                        placeholder="First Name" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      {/* <label className="form-label mx-3" htmlFor="FirstName">First Name</label> */}

                    </div>
          <div class="form-floating">
            <input type="text" class="form-control inp" name='LastName' id="LastName" placeholder="Last Name"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              {/* <label htmlFor="LastName" className='form-label mx-3'>Last Name</label> */}

          </div>

          <div className="form-floating">
                      <input type="email" name='email' id="email" className="form-control inp" required
                        placeholder="Email" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      {/* <label className="form-label mx-3" htmlFor="email">Your Email / Phone number</label> */}

                    </div>
          <div class="form-floating mb-2">
            <input type="password" class="form-control inp" name='password' id="password" placeholder="Password"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              {/* <label htmlFor="password" className='form-label mx-3'>Password</label> */}

          </div>
         
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>

          {/* <label htmlFor="photo">Upload Photo</label> */}
          {/* <input type="file" id='photo' name='photo' accept='image/jped, image/jpg, image/png' onChange={handleFileChange} required /> */}
          <p type='submit' className='font-weight-bold text-center' onClick={login}>Sign Up</p>
          <p type='submit' className='text-white btn btn mx-auto' onClick={login}>Login</p>
         
          </form>


                </div>
            </div>
        </div>
    </div>
      
    </div>
   
  )
}

export default SignUp