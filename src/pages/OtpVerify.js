import React from 'react'
import { useNavigate } from 'react-router-dom';

const OtpVerify = () => {

    const navigate=useNavigate();


  return (
    <>
        <div className='total-login-box'>
          <div className='center-login-box'>
            <h1>SPOTSTAR OTP VERIFICATION</h1>
              <div className='login-input-box'>

                <div>
                  <input type="number" />
                  <button className='btn2'  onClick={()=> navigate("/Welcome")}>verify</button>
                </div>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>Send Otp Again?</p>
                  <button className='btn2' >Resend Otp</button>
                </div>
                
              </div>
          </div>
        </div>
    </>
    
  )
}

export default OtpVerify