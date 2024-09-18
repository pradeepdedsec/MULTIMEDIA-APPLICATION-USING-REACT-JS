import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'
import Header from '../Components/Header';

const Home = () => {

  // Create a new Map
  const [userMap,setUserMap] = useState(new Map());

  // Add some entries
  userMap.set(1, 'John Doe');
  userMap.set(2, 'Jane Smith');
  userMap.set(3, 'Alice Johnson');

  // Get value by key
  const userId = 2;
  const userName = userMap.get(userId);

  console.log(userName); // Output: Jane Smith

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