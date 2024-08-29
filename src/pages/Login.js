import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/login.css'

const Login = () => {

  const navigate=useNavigate();


  return (
    <div className='total-login-box'>
      <div className='center-login-box'>
        <h1>Spotstar Login</h1>
        <div className='login-input-box'>
          <input type="text" placeholder='Username' />
          <div>
            <input type="password" placeholder='Password' />
            <Link to="/ForgotOtpSend"><p>forgotpassword</p></Link>
          </div>
          
          <button onClick={()=> navigate("/Home")}>Login</button>

          <p>Are you new user<Link to="/SignUp">Sign up</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Login