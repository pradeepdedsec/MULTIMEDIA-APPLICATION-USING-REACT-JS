import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotOtpSend = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>Forgot Password</h1>
        <input type="text" placeholder='Email/Phone Number' />
        <button onClick={()=> navigate("/ForgotOtpVerify")}>Send Otp</button>
    </div>
  )
}

export default ForgotOtpSend