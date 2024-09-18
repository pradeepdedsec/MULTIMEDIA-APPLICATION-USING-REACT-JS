import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const Welcome = () => {

    const navigate=useNavigate();


  return (
    <div>
      <Header />
        <h1>Welcome to Spotstar</h1>
        <button onClick={()=>navigate("/Home")}>Go to Home Page</button>
    </div>
  )
}

export default Welcome