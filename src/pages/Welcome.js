import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';

import '../Styles/welcome.css'
import { useAuth } from '../App';

const Welcome = () => {

  let {pendingUsername, pendingPassword, regUser } =useAuth();

  const updateDetails=()=>{
    regUser(pendingUsername,pendingPassword)
  }
  useEffect(() =>{
    updateDetails();
  },[pendingUsername])


  return (
    <div className='welcome-outer'>
      <div className="card">
        <h2 className="card-title">SPOTSTAR</h2>
        <p className="card-content">Welcome to Spotstar, where music meets movies in perfect harmony. Explore a world of endless entertainment with millions of songs, curated playlists, and the latest chart-topping hits. Dive into our expansive movie library, from timeless classics to the hottest new releases. Whether you’re here to vibe to your favorite tunes or settle in for a cinematic experience, Spotstar has it all. Your journey to ultimate entertainment starts here—play, watch, and discover without limits!</p>
        <Link to="/Login"  className="card-button">Go to Login</Link>
      </div>
    </div>
  )
}

export default Welcome