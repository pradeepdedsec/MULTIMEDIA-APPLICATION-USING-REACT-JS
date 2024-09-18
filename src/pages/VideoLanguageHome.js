import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


import DynamicImageBox from '../Components/DynamicImageBox';
import Header from '../Components/Header';

const VideoLanguageHome = () => {
  let {lang}=useParams(); 

  const navigate=useNavigate();

  const [currentLanguage,setCurrentLanguage]=useState([]);

  
  useEffect(()=>{

    const langMap=new Map();

  langMap.set("Tamil",[
    {
        Genre:"Actors",
        photos:[
            {
                name:"Ajith",
                path:"video/Tamil/Actors/Ajith/Actorimg/Ajith.webp"
            },
            
            {
                name:"Samantha",
                path:"video/Tamil/Actors/Samantha/Actorimg/Samantha.jpg"
            },
            {
                name:"Surya",
                path:"video/Tamil/Actors/Surya/Actorimg/Surya.png"
            },
            {
                name:"VijayAntony",
                path:"video/Tamil/Actors/VijayAntony/Actorimg/VijayAntony.jfif"
            },
            {
                name:"Vikram",
                path:"video/Tamil/Actors/Vikram/Actorimg/Vikram.jpg"
            }
        ]
    },
    {
        Genre:"Directors",
        photos:[
            {
                name:"Loki",
                path:"video/Tamil/Directors/loki/Diectorimg/Loki.jpg"
            },
            
            {
                name:"Maniratnam",
                path:"video/Tamil/Directors/maniratnam/Directorimg/Maniratnam.jpg"
            },
            {
                name:"Murugadoss",
                path:"video/Tamil/Directors/murugadoss/Directorimg/Murugadoss.jpg"
            },
            {
                name:"Shankar",
                path:"video/Tamil/Directors/shankar/Directorimg/Shankar.jpg"
            },
            {
                name:"Vetrimaran",
                path:"video/Tamil/Directors/vetrimaran/Directorimg/Vetrimaran.jpg"
            }
        ]
    },
    {
        Genre:"New Release",
        photos:[
            {
                name:"Garudan",
                path:"video/Tamil/New Release/garudan.jpeg"
            },
            
            {
                name:"Goat",
                path:"video/Tamil/New Release/goat.jpeg"
            },
            {
                name:"Indian2",
                path:"video/Tamil/New Release/indian2.jpg"
            },
            {
                name:"Maharaja",
                path:"video/Tamil/New Release/maharaja.jpg"
            },
            {
                name:"Star",
                path:"video/Tamil/New Release/star.jpg"
            }
        ]
    },
    {
        Genre:"Action",
        photos:[
            {
                name:"KGF",
                path:"video/Tamil/Action/KGF.jpg"
            },
            
            {
                name:"Maari2",
                path:"video/Tamil/Action/Maari2.jpg"
            },
            {
                name:"Mahaan",
                path:"video/Tamil/Action/Mahaan.jpg"
            },
            {
                name:"Vikram",
                path:"video/Tamil/Action/Vikram.jpg"
            },
            {
                name:"Vikram-Vedha",
                path:"video/Tamil/Action/Vikram-Vedha.jpg"
            }
        ]
    }
  ]);

    setCurrentLanguage(langMap.get(lang));
    console.log(langMap.get(lang)[0].Genre)
  },[lang])

  const goToPage1=(name)=>{
    navigate(`/CelebrityMoviePage/${name}`);
  }
    

  const goToPage2=(name)=>{
    navigate(`/Video/${name}`);
  }

  return (
    <> 
    <Header />
    <div className='total-music-home'>
        {
        
        (currentLanguage || []).map((e,k)=>(
            <>
                <p>{e.Genre==="Actors" || e.Genre==="Directors"?<>
                    <DynamicImageBox list={[e]} goToPage={goToPage1} />
                </>:
                    <DynamicImageBox list={[e]} goToPage={goToPage2} />
                }</p>
                
            </>
                
        ))
    } 
    </div>
      
    </>
  )
}

export default VideoLanguageHome