import React, { useEffect, useState } from 'react'

import DynamicImageBox from '../Components/DynamicImageBox'

import DynamicImageDisplay from '../Components/DynamicImageDisplay'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';

const CelebrityMoviePage = () => {


  let {celeb}=useParams();
  
  

  const navigate=useNavigate();

  const[celebrity,setCelebrity]=useState({
      name:"Ajith",
      path:"video/Tamil/Actors/Ajith/Actorimg/Ajith.webp",
      about:`Ajith Kumar is a highly respected and popular actor in Tamil cinema, known for his versatile performances across various genres. With a career spanning over three decades, he initially gained fame for his romantic roles but later became renowned for his action-packed films. Some of his notable movies include *Mankatha*, *Veeram*, *Vedalam*, and *Viswasam*. Apart from acting, Ajith is also a passionate professional racer, having competed in several motorsport events. Despite his stardom, he maintains a low-profile personal life, avoiding media attention and engaging in charity quietly. Fans lovingly refer to him as "Thala" for his leadership and influence in the film industry.`,
      movies:[
        {
          name:"Aegan",
          path:"video/Tamil/Actors/Ajith/movies/Aegan.jpg",
        },
        {
          name:"Billa",
          path:"video/Tamil/Actors/Ajith/movies/Billa.webp"
        },
        {
          name:"Mankatha",
          path:"video/Tamil/Actors/Ajith/movies/Mankatha.jpg"
        },
        {
          name:"Thunivu",
          path:"video/Tamil/Actors/Ajith/movies/Thunivu.jpg"
        }
      ]
  });

  


  useEffect(()=>{

    const currentCelebrity=new Map();

    currentCelebrity.set("Ajith",{
      name:"Ajith",
      path:"video/Tamil/Actors/Ajith/Actorimg/Ajith.webp",
      about:`Ajith Kumar is a highly respected and popular actor in Tamil cinema, known for his versatile performances across various genres. With a career spanning over three decades, he initially gained fame for his romantic roles but later became renowned for his action-packed films. Some of his notable movies include *Mankatha*, *Veeram*, *Vedalam*, and *Viswasam*. Apart from acting, Ajith is also a passionate professional racer, having competed in several motorsport events. Despite his stardom, he maintains a low-profile personal life, avoiding media attention and engaging in charity quietly. Fans lovingly refer to him as "Thala" for his leadership and influence in the film industry.`,
      movies:[
        {
          name:"Aegan",
          path:"video/Tamil/Actors/Ajith/movies/Aegan.jpg",
        },
        {
          name:"Billa",
          path:"video/Tamil/Actors/Ajith/movies/Billa.webp"
        },
        {
          name:"Mankatha",
          path:"video/Tamil/Actors/Ajith/movies/Mankatha.jpg"
        },
        {
          name:"Thunivu",
          path:"video/Tamil/Actors/Ajith/movies/Thunivu.jpg"
        }
      ]
  });
    
  currentCelebrity.set("Samantha",{
    name:"Samantha",
    path:"video/Tamil/Actors/Samantha/Actorimg/Samantha.jpg",
    about:`Samantha Ruth Prabhu is a prominent Indian actress known for her work in Tamil and Telugu cinema. She gained fame with her debut film *Ye Maaya Chesave* (2010) and has since starred in successful movies like *Eega* (2012) and *Mahanati* (2018). Samantha is praised for her versatile acting skills and has won several awards, including Filmfare Awards. She is also involved in philanthropic activities and has a strong social media presence.`,
    movies:[
      {
        name:"24",
        path:"video/Tamil/Actors/Samantha/movies/24.jpg"
      },
      {
        name:"BanaKaathadi",
        path:"video/Tamil/Actors/Samantha/movies/BanaKaathadi.jpg"
      },
      {
        name:"Kaththi",
        path:"video/Tamil/Actors/Samantha/movies/Kaththi.jpg"
      },
      {
        name:"Theri",
        path:"video/Tamil/Actors/Samantha/movies/Theri.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Surya",{
    name:"Surya",
    path:"video/Tamil/Actors/Surya/Actorimg/Surya.png",
    about:`Suriya, born Saravanan Sivakumar on July 23, 1975, is a highly acclaimed Indian actor, producer, and philanthropist, predominantly known for his work in Tamil cinema. He made his film debut with Nerukku Ner (1997), but his breakthrough came with Nandha (2001). He gained widespread recognition for his performances in films like Kaakha Kaakha (2003), Ghajini (2005), and the Singam series (2010-2017), showcasing his versatility across various genres. Suriya has received numerous accolades, including several Filmfare Awards. Beyond acting, he is celebrated for his philanthropic work, particularly through the Agaram Foundation, which focuses on providing education to underprivileged children. His commitment to both his craft and social causes has made him one of the most respected figures in Indian cinema.`,
    movies:[
      {
        name:"Ayan",
        path:"video/Tamil/Actors/Surya/movies/Ayan.jpg"
      },
      {
        name:"Kappan",
        path:"video/Tamil/Actors/Surya/movies/Kappan.jpg"
      },
      {
        name:"Mattran",
        path:"video/Tamil/Actors/Surya/movies/Mattran.jpg"
      },
      {
        name:"Vikram",
        path:"video/Tamil/Actors/Surya/movies/Vikram.jpg"
      }
    ]
  });
  
  currentCelebrity.set("VijayAntony",{
    name:"VijayAntony",
    path:"video/Tamil/Actors/VijayAntony/Actorimg/VijayAntony.jfif",
    about:`Vijay Antony is an Indian actor, music composer, and producer primarily known for his work in Tamil cinema. He started his career as a music composer with the film *Sukran* (2005) and gained fame for his compositions in films like *Raja Rani* (2013). Vijay made his acting debut with *Naan* (2012), where he received critical acclaim for his performance. He has since starred in several successful films, including *Saithan* (2016) and *Kolaigaran* (2019). Known for his versatile roles and contributions to both music and film, Vijay Antony continues to be a significant figure in the Tamil film industry.`,
    movies:[
      {
        name:"IndiaPakistan",
        path:"video/Tamil/Actors/VijayAntony/movies/IndiaPakistan.jpg"
      },
      {
        name:"Naan",
        path:"video/Tamil/Actors/VijayAntony/movies/Naan.jpg"
      },
      {
        name:"Pichaikaran",
        path:"video/Tamil/Actors/VijayAntony/movies/Pichaikaran.jpg"
      },
      {
        name:"Salim",
        path:"video/Tamil/Actors/VijayAntony/movies/Salim.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Vikram",{
    name:"Vikram",
    path:"video/Tamil/Actors/Vikram/Actorimg/Vikram.jpg",
    about:`Vijay Antony is an Indian actor, music composer, and producer primarily known for his work in Tamil cinema. He started his career as a music composer with the film *Sukran* (2005) and gained fame for his compositions in films like *Raja Rani* (2013). Vijay made his acting debut with *Naan* (2012), where he received critical acclaim for his performance. He has since starred in several successful films, including *Saithan* (2016) and *Kolaigaran* (2019). Known for his versatile roles and contributions to both music and film, Vijay Antony continues to be a significant figure in the Tamil film industry.`,
    movies:[
      {
        name:"10endrathukulla",
        path:"video/Tamil/Actors/Vikram/movies/10endrathukulla.jpg"
      },
      {
        name:"I",
        path:"video/Tamil/Actors/Vikram/movies/I.jpg"
      },
      {
        name:"Irumugan",
        path:"video/Tamil/Actors/Vikram/movies/Irumugan.jpg"
      },
      {
        name:"Mahan",
        path:"video/Tamil/Actors/Vikram/movies/Mahan.webp"
      },
    ]
  });
  
  currentCelebrity.set("Loki",{
    name:"Loki",
    path:"video/Tamil/Directors/loki/Diectorimg/Loki.jpg",
    about:`Loki, a character from Marvel Comics and the Marvel Cinematic Universe (MCU), is the God of Mischief and the adoptive brother of Thor. Portrayed by Tom Hiddleston, Loki is known for his complex personality, blending charisma with a penchant for deception and trickery. First appearing in *Thor* (2011), he became a fan favorite through his roles in *The Avengers* (2012) and the *Thor* sequels. Loki's character explores themes of identity and redemption, and he stars in his own Disney+ series, *Loki*, which delves into his adventures across different timelines.`,
    movies:[
      {
        name:"kaithi",
        path:"video/Tamil/Directors/loki/movies/kaithi.jpg",
      },
      {
        name:"leo",
        path:"video/Tamil/Directors/loki/movies/leo.jpg"
      },
      {
        name:"managaram",
        path:"video/Tamil/Directors/loki/movies/managaram.jpg"
      },
      {
        name:"master",
        path:"video/Tamil/Directors/loki/movies/master.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Maniratnam",{
    name:"Maniratnam",
    path:"video/Tamil/Directors/maniratnam/Directorimg/Maniratnam.jpg",
    about:`Mani Ratnam is a renowned Indian film director and screenwriter known for his work in Tamil cinema, as well as Hindi and other regional films. He gained acclaim for his innovative storytelling and distinct visual style, with notable films such as *Mouna Ragam* (1986), *Nayakan* (1987), and *Roja* (1992). Ratnam's films often feature strong narratives, complex characters, and memorable music, and he has been a significant influence on Indian cinema. His work has earned him numerous awards and accolades, cementing his reputation as one of the most influential filmmakers in Indian cinema.`,
    movies:[
      {
        name:"kaatru-veliyidai",
        path:"video/Tamil/Directors/maniratnam/movies/kaatru-veliyidai.jpg"
      },
      {
        name:"ok-kanmani",
        path:"video/Tamil/Directors/maniratnam/movies/ok-kanmani.jpg"
      },
      {
        name:"ps2",
        path:"video/Tamil/Directors/maniratnam/movies/ps2.jpg"
      },
      {
        name:"ravanan",
        path:"video/Tamil/Directors/maniratnam/movies/ravanan.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Murugadoss",{
    name:"Murugadoss",
    path:"video/Tamil/Directors/murugadoss/Directorimg/Murugadoss.jpg",
    about:`Mani Ratnam is a renowned Indian film director and screenwriter known for his work in Tamil cinema, as well as Hindi and other regional films. He gained acclaim for his innovative storytelling and distinct visual style, with notable films such as *Mouna Ragam* (1986), *Nayakan* (1987), and *Roja* (1992). Ratnam's films often feature strong narratives, complex characters, and memorable music, and he has been a significant influence on Indian cinema. His work has earned him numerous awards and accolades, cementing his reputation as one of the most influential filmmakers in Indian cinema.`,
    movies:[
      {
        name:"kathi",
        path:"video/Tamil/Directors/murugadoss/movies/kathi.jpg"
      },
      {
        name:"sarkar",
        path:"video/Tamil/Directors/murugadoss/movies/sarkar.jpg"
      },
      {
        name:"spyder",
        path:"video/Tamil/Directors/murugadoss/movies/spyder.jpg"
      },
      {
        name:"thuppaki",
        path:"video/Tamil/Directors/murugadoss/movies/thuppaki.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Shankar",{
    name:"Shankar",
    path:"video/Tamil/Directors/shankar/Directorimg/Shankar.jpg",
    about:`Mani Ratnam is a renowned Indian film director and screenwriter known for his work in Tamil cinema, as well as Hindi and other regional films. He gained acclaim for his innovative storytelling and distinct visual style, with notable films such as *Mouna Ragam* (1986), *Nayakan* (1987), and *Roja* (1992). Ratnam's films often feature strong narratives, complex characters, and memorable music, and he has been a significant influence on Indian cinema. His work has earned him numerous awards and accolades, cementing his reputation as one of the most influential filmmakers in Indian cinema.`,
    movies:[
      {
        name:"2.0",
        path:"video/Tamil/Directors/shankar/movies/2.0.jpg"
      },
      {
        name:"anniyan",
        path:"video/Tamil/Directors/shankar/movies/anniyan.jpg"
      },
      {
        name:"endhiran",
        path:"video/Tamil/Directors/shankar/movies/endhiran.jpg"
      },
      {
        name:"i",
        path:"video/Tamil/Directors/shankar/movies/i.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Vetrimaran",{
    name:"Vetrimaran",
    path:"video/Tamil/Directors/vetrimaran/Directorimg/Vetrimaran.jpg",
    about:`Vetrimaran is an acclaimed Indian film director and screenwriter known for his work in Tamil cinema. He gained prominence with his debut film *Polladhavan* (2007), which was well-received for its gritty storytelling. Vetrimaran is recognized for his collaborations with actor Dhanush, including films like *Aadukalam* (2011), which won several National Film Awards, and *Vada Chennai* (2018). His films often explore social issues and feature a realistic portrayal of characters and settings, earning him a reputation for his distinctive and impactful storytelling.`,
    movies:[
      {
        name:"asuran",
        path:"video/Tamil/Directors/vetrimaran/movies/asuran.jpg",
      },
      {
        name:"paava-kadaigal",
        path:"video/Tamil/Directors/vetrimaran/movies/paava-kadaigal.jpg"
      },
      {
        name:"vada-chennai",
        path:"video/Tamil/Directors/vetrimaran/movies/vada-chennai.jpg"
      },
      {
        name:"viduthalai",
        path:"video/Tamil/Directors/vetrimaran/movies/viduthalai.jpg"
      },
    ]
  });

    setCelebrity(currentCelebrity.get(celeb));
    console.log("celeb "+celeb);
  },[celeb]);
    
  console.log("celeb "+celeb);
  const goToPage=(name)=>{
    navigate(`/Video/${name}`);
  }


  return (
    <>
    <Header />
    <div className='music-person-page'>
      <img className='background' src={require("../media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />
      <div className='music-person-page-body'>
          <div className='total-music-body'>
          <h1>{celebrity.name}</h1>
          <div className='img-with-desc' style={{"width":"1200px"}}>
              <DynamicImageDisplay path={celebrity.path} />
              <div>
                <p>{celebrity.about}</p>
              </div>
          </div>

          <div className='total-audio-box'>
                <DynamicImageBox list={[{photos:celebrity.movies}]} goToPage={goToPage} />
          </div>
        </div>
      </div>     
    </div>
    </>
    
  )
}

export default CelebrityMoviePage