import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/music.css"
import DynamicAudioDisplay from '../Components/DynamicAudioDisplay'
import DynamicImageDisplay from '../Components/DynamicImageDisplay'
import Header from '../Components/Header';

const Music = () => {

    const {tname}=useParams();

    const[currentActor,setCurrentActor]=useState({
      name:"Surya",
      imgPath:"MusicHome/Surya (2).jpg",
      about:`Surya is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to 
                capture that," the Los Angeles-based singer-songwriter-actor shares. Her father 
                had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                Her keen sense for conveying feeling has served her well, thus far. 
                Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. 
                Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and 
                moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    
    

    useEffect(()=>{

      const actormap=new Map();

    actormap.set("Surya",{
      name:"Surya",
      imgPath:"MusicHome/Surya (2).jpg",
      about:`Surya is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to 
                capture that," the Los Angeles-based singer-songwriter-actor shares. Her father 
                had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                Her keen sense for conveying feeling has served her well, thus far. 
                Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. 
                Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and 
                moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Samantha",{
      name:"Samantha",
      imgPath:"MusicHome/Samantha.jpg",
      about:`Samantha Akini is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that," 
                        the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. 
                        Her mother had is German, English, Irish, and some Austrian ancestry. 
                        Her keen sense for conveying feeling has served her well, thus far. 
                        Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                        Acting has been something of a new development for her. 
                        Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                        "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Vijay",{
      name:"Vijay",
      imgPath:"MusicHome/Vijay.jpg",
      about:`Chiyaan Vikram is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that,
                        " the Los Angeles-based singer-songwriter-actor shares. 
                        Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                        Her keen sense for conveying feeling has served her well, thus far. 
                        Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                        Acting has been something of a new development for her. Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                        "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Vikram",{
      name:"Vikram",
      imgPath:"MusicHome/Vikram.jpg",
      about:`Chiyaan Vikram is a soulful artist with a rare gift for emotive and empathetic
                        "I think I'm good at knowing how people feel, how I feel, and being able to capture that,
                        " the Los Angeles-based singer-songwriter-actor shares. 
                        Her father had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                        Her keen sense for conveying feeling has served her well, thus far. 
                        Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                        Acting has been something of a new development for her. 
                        Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                        "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Nazriya",{
      name:"Nazriya",
      imgPath:"MusicHome/Nazriya.jpeg",
      about:`Nazriya Nazim Mebarak Ripoll was born on February 2, 1977, in Barranquilla, Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
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
                          Her dynamic dance style, incorporating traditional belly dancing, further distinguishes her performances.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("AR_Rahman",{
      name:"AR_Rahman",
      imgPath:"MusicHome/AR_Rahman.jpg",
      about:`A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able 
                to capture that," the Los Angeles-based singer-songwriter-actor shares. 
                Her father had Filipino ancestry. Her mother had is German, English, Irish, 
                and some Austrian ancestry. Her keen sense for conveying feeling has served her well, 
                thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," 
                she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("G.V.Prakash",{
      name:"G.V.Prakash",
      imgPath:"MusicHome/G.V.Prakash.jpg",
      about:`A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able 
                to capture that," the Los Angeles-based singer-songwriter-actor shares. 
                Her father had Filipino ancestry. Her mother had is German, English, Irish, 
                and some Austrian ancestry. Her keen sense for conveying feeling has served her well, 
                thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," 
                she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Aniruth",{
      name:"Aniruth",
      imgPath:"MusicHome/Aniruth.jpg",
      about:`Aniruth Ravichandran is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture 
                that," the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. 
                Her mother had is German, English, Irish, and some Austrian ancestry. 
                Her keen sense for conveying feeling has served her well, thus far. 
                Olivia is the star of the first two seasons of the Disney+ High School 
                Musical series. Acting has been something of a new development for her. 
                Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," she shares.
              `,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("VijayAntony",{
      name:"VijayAntony",
      imgPath:"MusicHome/VijayAntony.jpg",
      about:`A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able 
                to capture that," the Los Angeles-based singer-songwriter-actor shares. 
                Her father had Filipino ancestry. Her mother had is German, English, Irish, 
                and some Austrian ancestry. Her keen sense for conveying feeling has served her well, 
                thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," 
                she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("YuvanShankarraja",{
      name:"YuvanShankarraja",
      imgPath:"MusicHome/YuvanShankarraja.jpg",
      about:`A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able 
                to capture that," the Los Angeles-based singer-songwriter-actor shares. 
                Her father had Filipino ancestry. Her mother had is German, English, Irish, 
                and some Austrian ancestry. Her keen sense for conveying feeling has served her well, 
                thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," 
                she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("BillieElish",{
      name:"BillieElish",
      imgPath:"MusicHome/BillieElish.jpg",
      about:`Billie Eilish is an American singer-songwriter who gained global recognition with her unique style, 
                  combining haunting melodies, introspective lyrics, and a distinctive voice. Born on December 18, 2001, 
                  in Los Angeles, California, she first captured attention with her debut single "Ocean Eyes," 
                  which she released at just 14 years old. Her debut album, When We All Fall Asleep, Where Do We Go? (2019), 
                  catapulted her to stardom, earning her several Grammy Awards, including Album of the Year. 
                  Eilish is known for her eclectic fashion sense, often characterized by oversized clothing and a bold, edgy aesthetic. 
                  She has become a voice for Generation Z, addressing themes of mental health, self-identity, and the complexities of modern fame in her music. 
                  Eilish continues to push the boundaries of pop music, blending genres and experimenting with new sounds while maintaining a deeply personal 
                  and authentic approach to her artistry.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Olivia",{
      name:"Olivia",
      imgPath:"MusicHome/Olivia.jpg",
      about:`Olivia Rodrigo is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to capture that," 
                the Los Angeles-based singer-songwriter-actor shares. Her father had Filipino ancestry. 
                Her mother had is German, English, Irish, and some Austrian ancestry. Her keen sense for conveying 
                feeling has served her well, thus far. Olivia is the star of the first two seasons of the Disney+ 
                High School Musical series. Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. "Acting and music relate in that they are both about 
                capturing feelings and moments as accurately as you can," she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("MJ",{
      name:"MJ",
      imgPath:"MusicHome/MJ.jpg",
      about:`A.r.Rahman is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able 
                to capture that," the Los Angeles-based singer-songwriter-actor shares. 
                Her father had Filipino ancestry. Her mother had is German, English, Irish, 
                and some Austrian ancestry. Her keen sense for conveying feeling has served her well, 
                thus far. Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. Singing since she was 4, 
                Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and moments as accurately as you can," 
                she shares.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Shakira",{
      name:"Shakira",
      imgPath:"MusicHome/Shakira.jpg",
      about:`Shakira Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, 
                  Colombia, to Nidia del Carmen Ripoll Torrado and William Alberto Mebarak Chadid. 
                  She is of Lebanese, Spanish, and Italian descent, contributing to her diverse musical influences. 
                  During her elementary school years, Shakira was diagnosed with ADHD, which mainly manifested as hyperactivity. 
                  She was known among her peers for her belly dancing skills. Despite her enthusiasm for music, she faced early 
                  criticism when a school choir teacher told her she wouldn't succeed because she "sang like a goat.
                  " These challenges did not deter her passion for music and performance. Shakira began her musical career at the age of 12, 
                  quickly gaining attention for her unique voice and energetic performances. Her breakthrough came with the album "MTV Unplugged," 
                  which won the Grammy Award for Best Latin Pop Album in 2001, marking her rise to international prominence. Known for her fusion of Latin, rock, 
                  and Middle Eastern music styles, Shakira has created a distinctive sound that has garnered a global fan base. Her dynamic dance style, incorporating 
                  traditional belly dancing, further distinguishes her performances.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Eminem",{
      name:"Eminem",
      imgPath:"Eminem.jpg",
      about:`Eminem Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, 
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
                  Her dynamic dance style, incorporating traditional belly dancing, further distinguishes her performances.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

      if(tname){
        setCurrentActor(actormap.get(tname));
      }
    },[tname])

    

  return (
    <>
    <Header />
    <div className='music-person-page'>
      <div className='music-person-page-body'>
          <div className='total-music-body'>
          <h1>{currentActor.name}</h1>
          <div className='img-with-desc'>
              <DynamicImageDisplay path={currentActor.imgPath} />
              <div>
                <p>{currentActor.about}</p>
              </div>
          </div>

          <div className='total-audio-box'>
            <div className='songs'>
                <div className='audio-head'>
                  <h1>Songs</h1>
                </div>
                {
                  currentActor.songs.map((e)=>(
                    <DynamicAudioDisplay path={e} />
                  ))
                }
            </div>

          </div>
        </div>
      </div>     
    </div>
    </>
    
  )
}

export default Music