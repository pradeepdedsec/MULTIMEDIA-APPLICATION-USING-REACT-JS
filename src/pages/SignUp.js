import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate=useNavigate();


  return (
    <div>
        <div className='total-login-box'>
            <div className='center-login-box'>
                <h1>Spotstar SignUp</h1>
                  <div className='login-input-box'>
                      <div>
                        <input type="text" placeholder='First Name' />
                      </div>

                      <div>
                        <input type="text" placeholder='Last Name' />
                      </div>

                      <div>
                        <input type="number" placeholder='Phone Number' />
                      </div>

                      <div>
                        <input type="email" placeholder='Email' />
                      </div>

                      <div>
                        <input type="password" placeholder='Password' />
                      </div>
                    
                      <div>
                        <input type="password" placeholder='Confirm Password' />
                      </div>

                      <div style={{marginBottom:"10px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <button className='btn'  onClick={()=>navigate("/Login")}>Cancel</button>
                        <button className='btn'  onClick={()=>navigate("/OtpVerify")}>Next</button>
                      </div>
                      <p>already have account <Link to="/Login">Log in</Link></p>
                  </div>
            </div>
      </div>    
    </div>
  )
}

export default SignUp