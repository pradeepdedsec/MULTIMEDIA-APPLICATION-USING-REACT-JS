import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/welcome.css'

const Welcome = () => {



  return (
    <div className='welcome-outer'>
      <div class="card">
        <h2 class="card-title">SPOTSTAR</h2>
        <p class="card-content">Welcome to Spotstar, where music meets movies in perfect harmony. Explore a world of endless entertainment with millions of songs, curated playlists, and the latest chart-topping hits. Dive into our expansive movie library, from timeless classics to the hottest new releases. Whether you’re here to vibe to your favorite tunes or settle in for a cinematic experience, Spotstar has it all. Your journey to ultimate entertainment starts here—play, watch, and discover without limits!</p>
        <Link to="/Home"  className="card-button">Go to Home</Link>
      </div>
    </div>
  )
}

export default Welcome