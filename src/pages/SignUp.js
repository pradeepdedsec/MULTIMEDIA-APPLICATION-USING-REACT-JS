import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>SPOTSTAR-SIGN UP</h1>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="number" placeholder='Phone Number' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button onClick={()=>navigate("/Login")}>Cancel</button>
        <button onClick={()=>navigate("/OtpVerify")}>Next</button>
    </div>
  )
}

export default SignUp