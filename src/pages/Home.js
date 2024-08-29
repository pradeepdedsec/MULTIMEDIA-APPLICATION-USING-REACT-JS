import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'

const Home = () => {
  return (
    <div className='spotstar-home'>
        <h1>SPOTSTAR-WELCOME</h1>

        <div className='spot-total'>
            <div className='spot-home-div1'>
                <Link to={"/MusicHome"}><img src={require("../media/images/home/Music.jpg")} alt="music" /></Link>
                <Link to={"/MusicHome"}><img src={require("../media/images/home/Movies.jpg")} alt="video" /></Link>
            </div>
        </div>

        
        
    </div>
  )
}

export default Home