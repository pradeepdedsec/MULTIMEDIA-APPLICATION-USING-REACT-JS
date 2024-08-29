import React from 'react'
import { useNavigate } from 'react-router-dom';

const PasswordUpdated = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>Password Updated Successfully</h1>
        <button onClick={()=>navigate("/Login")}>Go to Home Page</button>
    </div>
  )
}

export default PasswordUpdated