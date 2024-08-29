import React from 'react';
import "../Styles/musicHome.css";
import { useNavigate } from 'react-router-dom';

const MusicHome = () => {

    const navigate=useNavigate();

    const goToMusicPage=(name)=>{
        navigate(`/Music/${name}`);
    }

    return (
        <div>
            
            <div className='whole-music-box'>

                <div className='total-scroll-box'>
                    <h1 className='scroll-box-head'>{"Actors"}</h1>
                    <div className='scroll-imgbox'>
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/Surya (2).jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Samantha")} src={require("../media/images/MusicHome/Samantha.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Vijay")} src={require("../media/images/MusicHome/Vijay.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Vikram")} src={require("../media/images/MusicHome/Vikram.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("nazriya")} src={require("../media/images/MusicHome/nazriya.jpeg")} alt={"Actors"} />
                    </div>
                </div>

                <div className='total-scroll-box'>
                    <h1 className='scroll-box-head'>{"Music Directors"}</h1>
                    <div className='scroll-imgbox'>
                    <img onClick={()=> goToMusicPage("AR_Rahman")} src={require("../media/images/MusicHome/AR_Rahman.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("G.V.Prakash")} src={require("../media/images/MusicHome/G.V.Prakash.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Aniruth")} src={require("../media/images/MusicHome/Aniruth.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("VijayAntony")} src={require("../media/images/MusicHome/VijayAntony.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("YuvanShankarraja")} src={require("../media/images/MusicHome/YuvanShankarraja.jpg")} alt={"Actors"} />
                    </div>
                </div>

                <div className='total-scroll-box'>
                    <h1 className='scroll-box-head'>{"English Artists"}</h1>
                    <div className='scroll-imgbox'>
                    <img onClick={()=> goToMusicPage("BillieElish")} src={require("../media/images/MusicHome/BillieElish.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Olivia")} src={require("../media/images/MusicHome/Olivia.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("MJ")} src={require("../media/images/MusicHome/MJ.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Shakira")} src={require("../media/images/MusicHome/Shakira.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Eminem")} src={require("../media/images/MusicHome/Eminem.jpg")} alt={"Actors"} />
                    </div>
                </div>

                {/*<div className='total-scroll-box'>
                    <h1 className='scroll-box-head'>{"Actors"}</h1>
                    <div className='scroll-imgbox'>
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/Surya (2).jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/Samantha.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/Vijay.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/Vikram.jpg")} alt={"Actors"} />
                    <img onClick={()=> goToMusicPage("Surya")} src={require("../media/images/MusicHome/nazriya.jpeg")} alt={"Actors"} />
                    </div>
                </div>*/}
            </div>
        </div>
    );
}

export default MusicHome