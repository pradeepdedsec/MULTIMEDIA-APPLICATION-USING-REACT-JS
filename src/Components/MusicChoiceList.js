import React, { useEffect, useState } from 'react';
import "../Styles/musicHome.css";

const MusicChoiceList = (props) => {

    const [heading,setHeading]=useState("");

    console.log("here")

    let Actors="Actors";
    
    useEffect(()=>{
        if(props.heading){
            setHeading(props.heading || "");
        }

        setHeading("Actor");
        
    },[]);
        return (
            <>
                <h1 className='scroll-box-head'>{"Actors"}</h1>
                <div className='scroll-imgbox'>
                <img src={require("../media/images/MusicHome/Surya (2).jpg")} alt={heading} />
                <img src={require("../media/images/MusicHome/Samantha.jpg")} alt={heading} />
                <img src={require("../media/images/MusicHome/Vijay.jpg")} alt={heading} />
                <img src={require("../media/images/MusicHome/Vikram.jpg")} alt={heading} />
                <img src={require("../media/images/MusicHome/nazriya.jpeg")} alt={heading} />
                </div>
            </>
          )
    
    
  
}

export default MusicChoiceList