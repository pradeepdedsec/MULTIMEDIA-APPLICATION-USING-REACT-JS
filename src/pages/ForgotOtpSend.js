import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotOtpSend = () => {

    const navigate=useNavigate();


  return (
    <>
        <div className='total-login-box'>
          <div className='center-login-box'>
              <h1>Forgot Password</h1>

              <div className='login-input-box'>

                <div>
                  <input type="text" placeholder='Email/Phone Number' />
                  <button className='btn2' onClick={()=> navigate("/ForgotOtpVerify")}>Send Otp</button>
                </div>

              </div>
          </div>
        </div>
    </>
    
  )
}

export default ForgotOtpSend