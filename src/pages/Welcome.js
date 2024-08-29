import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate=useNavigate();


  return (
    <div>
        <h1>Welcome to Spotstar</h1>
        <button onClick={()=>navigate("/Home")}>Go to Home Page</button>
    </div>
  )
}

export default Welcome