import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'

const Home = () => {

  return (
    <>
    <div className='spotstar-home'>

        <div className='spot-total'>
            <div>
              <h1>Welcome to Spotstar</h1>
              <p>Choose your  favorite spot and get ready to explore!</p>
            </div>
            <div className='spot-home-div1'>
                <Link to={"/MusicHome"}><img  className='dynamic-img' src={require("../media/images/home/Music.png")} alt="music" /></Link>
                <Link to={"/VideoHome"}><img className='dynamic-img' src={require("../media/images/home/Movies.png")} alt="video" /></Link>
            </div>
        </div>

        
        
    </div>
    </>
    
  )
}

export default Home