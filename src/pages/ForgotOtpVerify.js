import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotOtpVerify = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>SPOTSTAR-OTP VERIFICATION</h1>
        <input type="number" />
        <button onClick={()=> navigate("/NewPassword")}>verify</button>
        <p>Send Otp Again?</p>
        <button>Resend Otp</button>
    </div>
  )
}

export default ForgotOtpVerify