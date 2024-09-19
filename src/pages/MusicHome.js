import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../Styles/totalMusicHome.css'

import DynamicImageBox from '../Components/DynamicImageBox'
import Header from '../Components/Header';

const MusicHome = () => {

    const navigate=useNavigate();

    const[list,setList]=useState([

        {
            Genre:"Actors",
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
                /*{
                    name:"Nazriya",
                    path:"MusicHome/Nazriya.jpg"
                },*/
        
            ]
        },

        {
            Genre:"Music Directors",
            photos:[
                {
                    name:"AR_Rahman",
                    path:"MusicHome/AR_Rahman.jpg"
                },
                {
                    name:"G.V.Prakash",
                    path:"MusicHome/G.V.Prakash.jpg"
                },
                {
                    name:"Aniruth",
                    path:"MusicHome/Aniruth.jpg"
                },
                {
                    name:"VijayAntony",
                    path:"MusicHome/VijayAntony.jpg"
                },
                {
                    name:"YuvanShankarraja",
                    path:"MusicHome/YuvanShankarraja.jpg"
                },
        
            ]
        },


        {
            Genre:"English Artists",
            photos:[
                {
                    name:"BillieElish",
                    path:"MusicHome/BillieElish.jpg"
                },
                
                {
                    name:"Olivia",
                    path:"MusicHome/Olivia.jpg"
                },
                {
                    name:"MJ",
                    path:"MusicHome/MJ.jpg"
                },
                {
                    name:"Shakira",
                    path:"MusicHome/Shakira.jpg"
                },
                {
                    name:"Eminem",
                    path:"MusicHome/Eminem.jpg"
                },
        
            ]
        },

        /*{
            Genre:"Music Directors",
            photos:[
                {
                    name:"AR_Rahman",
                    path:"AR_Rahman.jpg"
                },
                {
                    name:"G.V.Prakash",
                    path:"G.V.Prakash.jpg"
                },
                {
                    name:"Aniruth",
                    path:"Aniruth.jpg"
                },
                {
                    name:"VijayAntony",
                    path:"VijayAntony.jpg"
                },
                {
                    name:"YuvanShankarraja",
                    path:"YuvanShankarraja.jpg"
                },
        
            ]
        },

        {
            Genre:"Music Directors",
            photos:[
                {
                    name:"AR_Rahman",
                    path:"AR_Rahman.jpg"
                },
                {
                    name:"G.V.Prakash",
                    path:"G.V.Prakash.jpg"
                },
                {
                    name:"Aniruth",
                    path:"Aniruth.jpg"
                },
                {
                    name:"VijayAntony",
                    path:"VijayAntony.jpg"
                },
                {
                    name:"YuvanShankarraja",
                    path:"YuvanShankarraja.jpg"
                },
        
            ]
        }*/

    ]
    );

    const goToPage=(name)=>{
        setList([]);
        navigate(`/Music/${name}`);
    }

    return (
        <>
        <Header/>
        <div className='total-music-home'>
            <DynamicImageBox list={list} goToPage={goToPage} />
        </div>
        </>
        
    );
}

export default MusicHome