import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'
import Header from '../Components/Header';

const Home = () => {

  return (
    <>
    <Header />
    <div className='spotstar-home'>

        <div className='spot-total'>
            <div className='spot-home-div1'>
                <Link to={"/MusicHome"}><img  className='dynamic-img' src={require("../media/images/home/Music.jpg")} alt="music" /></Link>
                <Link to={"/VideoHome"}><img className='dynamic-img' src={require("../media/images/home/Movies.jpg")} alt="video" /></Link>
            </div>
        </div>

        
        
    </div>
    </>
    
  )
}

export default Home