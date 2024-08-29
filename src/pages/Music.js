import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/music.css"

const Music = () => {

    const {tname}=useParams();

    const[name,setName]=useState("");
    

    useEffect(()=>{
      setName(tname || "");
    },[tname])

    

  return (
    <div className='music-person-page'>
      <div className='music-person-page-body'>
      {name==="Surya"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Surya (2).jpg")} alt="" />
              <div>
                <p>Surya is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to 
                capture that," the Los Angeles-based singer-songwriter-actor shares. Her father 
                had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                Her keen sense for conveying feeling has served her well, thus far. 
                Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. 
                Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and 
                moments as accurately as you can," she shares.</p>
              </div>
          </div>

          <div className='total-audio-box'>
            <div className='songs'>
                <div className='audio-head'>
                  <h1>Songs</h1>
                </div>

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


      <div className='music-person-page-body'>
      {name==="Vijay"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Vijay.jpg")} alt="" />
              <div>
                <p>Chiyaan Vikram is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that,
                        " the Los Angeles-based singer-songwriter-actor shares. 
                        Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                        Her keen sense for conveying feeling has served her well, thus far. 
                        Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                        Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
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




      <div className='music-person-page-body'>
      {name==="Vikram"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Vikram.jpg")} alt="" />
              <div>
                <p>Chiyaan Vikram is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that,
                        " the Los Angeles-based singer-songwriter-actor shares. 
                        Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
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



      <div className='music-person-page-body'>
      {name==="nazriya"?
        <>
          <div className='total-music-body'>
          <h1>{"Nazriya"}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/nazriya.jpeg")} alt="" />
              <div>
                <p>Nazriya Nazim Mebarak Ripoll was born on February 2, 1977, in Barranquilla, Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                          She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                          During her elementary school years, Shakira was diagnosed with ADHD, 
                          which mainly manifested as hyperactivity. 
                          She was known among her peers for her belly dancing skills. 
                          Despite her enthusiasm for music, she faced early criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat." 
                          These challenges did not deter her passion for music and performance. 
                          Shakira began her musical career at the age of 12, quickly gaining attention for her unique voice and energetic performances. 
                          Her breakthrough came with the album "MTV Unplugged," 
                          which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. 
                          Known for her fusion of Latin, rock, and Middle Eastern music styles, 
                          Shakira has created a distinctive sound that has garnered a global fan base. 
                          Her dynamic dance style, incorporating traditional belly dancing, further distinguishes her performances.</p>
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
      {name==="AR_Rahman"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/AR_Rahman.jpg")} alt="" />
              <div>
                <p>A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.</p>
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
      {name==="G.V.Prakash"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/G.V.Prakash.jpg")} alt="" />
              <div>
                <p>Samantha Akini is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.</p>
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
      {name==="Aniruth"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Aniruth.jpg")} alt="" />
              <div>
                <p>Aniruth Ravichandran is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.</p>
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
      {name==="VijayAntony"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/VijayAntony.jpg")} alt="" />
              <div>
                <p>Samantha Akini is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.</p>
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
      {name==="YuvanShankarraja"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/YuvanShankarraja.jpg")} alt="" />
              <div>
                <p>Nazriya Nazim Mebarak Ripoll was born on February 2, 1977, in Barranquilla, Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                          She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                          During her elementary school years, Shakira was diagnosed with ADHD, 
                          which mainly manifested as hyperactivity. 
                          She was known among her peers for her belly dancing skills. 
                          Despite her enthusiasm for music, she faced early criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat." 
                          These challenges did not deter her passion for music and performance. 
                          Shakira began her musical career at the age of 12, quickly gaining attention for her unique voice and energetic performances. 
                          Her breakthrough came with the album "MTV Unplugged," 
                          which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. 
                          Known for her fusion of Latin, rock, and Middle Eastern music styles, 
                          Shakira has created a distinctive sound that has garnered a global fan base. 
                          Her dynamic dance style, incorporating traditional belly dancing, further distinguishes her performances.</p>
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
      {name==="BillieElish"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/BillieElish.jpg")} alt="" />
              <div>
                <p>Billie Eilish is an American singer-songwriter who gained global recognition with her unique style, 
                  combining haunting melodies, introspective lyrics, and a distinctive voice. Born on December 18, 2001, 
                  in Los Angeles, California, she first captured attention with her debut single "Ocean Eyes," 
                  which she released at just 14 years old. Her debut album, When We All Fall Asleep, Where Do We Go? (2019), 
                  catapulted her to stardom, earning her several Grammy Awards, including Album of the Year. 
                  Eilish is known for her eclectic fashion sense, often characterized by oversized clothing and a bold, edgy aesthetic. 
                  She has become a voice for Generation Z, addressing themes of mental health, self-identity, and the complexities of modern fame in her music. 
                  Eilish continues to push the boundaries of pop music, blending genres and experimenting with new sounds while maintaining a deeply personal 
                  and authentic approach to her artistry.</p>
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
      {name==="Olivia"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Olivia.jpg")} alt="" />
              <div>
                <p> Olivia Rodrigo is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," 
                the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. 
                Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying 
                feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ 
                High School Musical series. Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about 
                capturing feelings and moments as accurately as you can," she shares.</p>
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
      {name==="MJ"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/MJ.jpg")} alt="" />
              <div>
                <p>Shakira Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, 
                  Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                  She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                  During her elementary school years, Shakira was diagnosed with ADHD, which mainly manifested as hyperactivity. 
                  She was known among her peers for her belly dancing skills. Despite her enthusiasm for music, she faced early 
                  criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat.
                  " These challenges did not deter her passion for music and performance. Shakira began her musical career at the age of 12, 
                  quickly gaining attention for her unique voice and energetic performances. Her breakthrough came with the album "MTV Unplugged," 
                  which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. Known for her fusion of Latin, rock, 
                  and Middle Eastern music styles, Shakira has created a distinctive sound that has garnered a global fan base. Her dynamic dance style, incorporating 
                  traditional belly dancing, further distinguishes her performances.</p>
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
      {name==="Shakira"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Shakira.jpg")} alt="" />
              <div>
                <p>Shakira Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, 
                  Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                  She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                  During her elementary school years, Shakira was diagnosed with ADHD, which mainly manifested as hyperactivity. 
                  She was known among her peers for her belly dancing skills. Despite her enthusiasm for music, she faced early 
                  criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat.
                  " These challenges did not deter her passion for music and performance. Shakira began her musical career at the age of 12, 
                  quickly gaining attention for her unique voice and energetic performances. Her breakthrough came with the album "MTV Unplugged," 
                  which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. Known for her fusion of Latin, rock, 
                  and Middle Eastern music styles, Shakira has created a distinctive sound that has garnered a global fan base. Her dynamic dance style, incorporating 
                  traditional belly dancing, further distinguishes her performances.</p>
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
      {name==="Eminem"?
        <>
          <div className='total-music-body'>
          <h1>{name}</h1>
          <div className='img-with-desc'>
              
              <img src={require("../media/images/MusicHome/Eminem.jpg")} alt="" />
              <div>
                <p>Eminem Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, 
                  Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                  She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                  During her elementary school years, Shakira was diagnosed with ADHD, which mainly manifested as hyperactivity. 
                  She was known among her peers for her belly dancing skills. Despite her enthusiasm for music, 
                  she faced early criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat." 
                  These challenges did not deter her passion for music and performance. Shakira began her musical career at the age of 12, 
                  quickly gaining attention for her unique voice and energetic performances. Her breakthrough came with the album "MTV Unplugged," 
                  which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. 
                  Known for her fusion of Latin, rock, and Middle Eastern music styles, Shakira has created a distinctive 
                  sound that has garnered a global fan base. 
                  Her dynamic dance style, incorporating traditional belly dancing, further distinguishes her performances.</p>
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

export default Music