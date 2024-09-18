import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import DynamicImageBox from '../Components/DynamicImageBox'

import '../Styles/videoHome.css'
import Header from '../Components/Header';

const VideoHome = () => {

  
  const navigate=useNavigate();

  const [language,setlanguage]=useState("");
  const[list,setList]=useState([

    {
        Genre:"New Movies",
        photos:[
            {
                name:"Surya",
                path:"MusicHome/Surya.jpg"
            },
            {
                name:"Samantha",
                path:"MusicHome/Samantha.jpg"
            },
            {
                name:"Vijay",
                path:"MusicHome/Vijay.jpg"
            },
            {
                name:"Vikram",
                path:"MusicHome/Vikram.jpg"
            },
            {
                name:"Nazriya",
                path:"MusicHome/Nazriya.jpeg"
            },
    
        ]
    },
    {
      Genre:"Upcoming Movies",
      photos:[
          {
              name:"Surya",
              path:"MusicHome/Surya.jpg"
          },
          {
              name:"Samantha",
              path:"MusicHome/Samantha.jpg"
          },
          {
              name:"Vijay",
              path:"MusicHome/Vijay.jpg"
          },
          {
              name:"Vikram",
              path:"MusicHome/Vikram.jpg"
          },
          {
              name:"Nazriya",
              path:"MusicHome/Nazriya.jpeg"
          },
  
      ]
  },
  ]);  

  const goToPage=(name)=>{
    navigate(`/CelebrityMoviePage/${name}`);
}
  return (
    <>
    <Header />
    <div className='total-video-home'>  
        <div className="select-container">
            <select className="custom-select" value={language} onChange={(e)=> navigate(`/VideoLanguageHome/${e.target.value}`)}>
                <option>Select-Language</option>
                <option value="Tamil">Tamil</option>
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
            </select>
        </div>
            
        <DynamicImageBox list={list} goToPage={goToPage} />
    </div>
    </>
    
  )
}

export default VideoHome