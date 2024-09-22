import React, { useEffect, useState } from 'react';

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
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Samantha",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vijay",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vikram",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Nazriya",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },

        {
            Genre:"Music Directors",
            photos:[
                {
                    name:"AR_Rahman",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"G.V.Prakash",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Aniruth",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"VijayAntony",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"YuvanShankarraja",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },


        {
            Genre:"English Artists",
            photos:[
                {
                    name:"BillieElish",
                    path:"Loading/Loading.gif"
                },
                
                {
                    name:"Olivia",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"MJ",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Shakira",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Eminem",
                    path:"Loading/Loading.gif"
                },
        
            ]
        }
    ]
    );

    useEffect(()=>{
        setList(
            [

                {
                    Genre:"Actors",
                    photos:[
                        {
                            name:"Surya",
                            path:"MusicHome/Surya.png"
                        },
                        {
                            name:"Samantha",
                            path:"MusicHome/Samantha.jfif"
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
                            path:"MusicHome/Nazriya.jpg"
                        },
                
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
                            path:"MusicHome/VijayAntony.jfif"
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
                }
            ]
        )
    },[])

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