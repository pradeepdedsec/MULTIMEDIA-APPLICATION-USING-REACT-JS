import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>SPOTSTAR-SET NEW PASSWORD</h1>
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button onClick={()=>navigate("/PasswordUpdated")}>Update</button>
    </div>
  )
}

export default NewPassword