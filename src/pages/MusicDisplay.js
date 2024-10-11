import React from 'react'
import DynamicImageDisplay from '../Components/DynamicImageDisplay'
import Header from '../Components/Header'

const MusicDisplay = ({name,path,about,songs}) => {

  return (
    <div>
        <Header path='MusicHome' />
        <div className='music-person-page-body'>
            {name==="Samantha"?
                <>
                <div className='total-music-body'>
                <h1>{name}</h1>
                <div className='img-with-desc'>
                    <DynamicImageDisplay name={name} path={path} />
                    <div>
                        <p>{about}</p>
                    </div>
                </div>

                <div className='total-audio-box'>
                    <audio controls>
                        <source src={require("../media/audio/lisa/As if it's your last lisa rap lyrics.mp3")} type="audio/mp3" />
                    </audio>

                    <audio controls>
                    <source src={require("../media/audio/lisa/BLACKPINK - Pink Venom rap part.mp3")} type="audio/mp3" />
                    </audio>

                    <audio controls>
                    <source src={require("../media/audio/anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3")} type="audio/mp3" />
                    </audio>

                    <audio controls>
                    <source src={require("../media/audio/lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3")} type="audio/mp3" />
                    </audio>

                    <audio controls>
                    <source src={require("../media/audio/lisa/Lisa Rap Lyrics in Shoong.mp3")} type="audio/mp3" />
                    </audio>

                </div>
                </div>
                </>
                :<></>}
            </div>

        <div className='music-person-page-body'>
      {name==="Samantha"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Samantha.jpg")} alt="" />
              <div>
                <p>Samantha Akini is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that," 
                        the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. 
                        Her mother had is German, English, Irish, and some Austrian ancestry. 
                        Her keen sense for conveying feeling has served her well, thus far. 
                        Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                        Acting has been something of a new development for her. 
                        Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                        "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.</p>
              </div>
          </div>

          <div className='total-audio-box'>
            <audio controls>
              <source src={require("../media/audio/lisa/As if it's your last lisa rap lyrics.mp3")} type="audio/mp3" />
            </audio>

            <audio controls>
              <source src={require("../media/audio/lisa/BLACKPINK - Pink Venom rap part.mp3")} type="audio/mp3" />
            </audio>

            <audio controls>
              <source src={require("../media/audio/anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3")} type="audio/mp3" />
            </audio>

            <audio controls>
              <source src={require("../media/audio/lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3")} type="audio/mp3" />
            </audio>

            <audio controls>
              <source src={require("../media/audio/lisa/Lisa Rap Lyrics in Shoong.mp3")} type="audio/mp3" />
            </audio>

          </div>
        </div>
        </>
        :<></>}
      </div>
    </div>
  )
}

export default MusicDisplay