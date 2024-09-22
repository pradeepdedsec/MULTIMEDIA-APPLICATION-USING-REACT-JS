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
      imgPath:"Loading/Loading.gif",
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
      imgPath:"MusicHome/Surya.png",
      about:`Suriya Sivakumar, born on July 23, 1975, in Chennai, India, is a distinguished actor who has made a profound impact on Tamil cinema. As the son of the acclaimed actor Sivakumar and the younger brother of actor Karthi, Suriya was introduced to the film industry from a young age. He made his acting debut in the 1997 film Nerrukku Ner, but his career took a major leap with the 2001 film Ghajini, directed by A.R. Murugadoss. In Ghajini, Suriya's portrayal of a man grappling with short-term memory loss was widely praised for its depth and intensity, establishing him as a leading actor. His versatility is evident in his diverse roles, including the intense police officer in the Singam series, where his commanding presence and action sequences were highly acclaimed, and in 24, where he portrayed both a space scientist and a villain, showcasing his ability to handle complex characters. His performance in Soorarai Pottru, based on the life of Air Deccan founder G.R. Gopinath, was particularly notable for its emotional resonance and inspiring narrative. In addition to his cinematic achievements, Suriya is deeply involved in philanthropy through his Agaram Foundation, which supports educational and healthcare initiatives for underprivileged children. His dedication to social causes reflects his belief in giving back to the community and making a positive impact on society. Over the years, Suriya has received numerous awards and accolades for his work in both film and philanthropy, earning him a devoted fan base and a respected place in Indian cinema. His enduring influence is marked by his exceptional acting talent and his ongoing commitment to societal betterment, securing his legacy as one of the most respected and impactful figures in the film industry.`,
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
      imgPath:"MusicHome/Samantha.jfif",
      about:`Samantha Ruth Prabhu is one of the most prominent actresses in South Indian cinema, known for her beauty, grace, and versatile performances across various genres. With a career spanning over a decade, Samantha has made a significant mark in Tamil and Telugu films. She debuted in 2010 with Ye Maaya Chesave, which earned her critical acclaim and won her the Nandi Award for Best Actress. Since then, she has appeared in a series of successful films, including Eega, Theri, Rangasthalam, Mersal, and Oh! Baby. Samantha is praised for her ability to effortlessly switch between commercial and content-driven roles, with films like Mahanati highlighting her acting depth. Her natural talent, along with her expressive eyes and charming screen presence, has made her a fan favorite. Over the years, she has worked alongside top actors such as Vijay, Mahesh Babu, and Allu Arjun, building a diverse filmography.

Apart from her acting prowess, Samantha is known for her involvement in philanthropic activities. She founded the NGO Pratyusha Support, which provides medical support to women and children in need. Her charity work, often done without much publicity, has endeared her even more to the public.

In addition to her film career, Samantha has gained recognition for her fashion sense, becoming a style icon in the South Indian film industry. Recently, she has ventured into web series, with her role in The Family Man 2 receiving widespread praise for her portrayal of a complex character, demonstrating her willingness to take on unconventional roles. Despite facing personal challenges, including her battle with a health condition and a high-profile divorce, Samantha remains resilient and focused on her career. Her strong work ethic and dedication have cemented her place as one of the most influential and respected actresses in the industry, making her an inspiration to many.`,
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
      about:`Vijay, born Joseph Vijay Chandrasekhar on June 22, 1974, in Chennai, India, is a prominent and influential actor in Tamil cinema known for his dynamic performances and charismatic screen presence. As the son of veteran director S.A. Chandrasekhar and a film producer, Vijay was introduced to the film industry from a young age, beginning his career as a child artist in the 1984 film Vetri. His transition to lead roles came with the 1992 film Naalaiya Theerpu, but it was his performance in the 1996 film Poove Unakkaga that marked a significant breakthrough, showcasing his ability to blend romance with drama and establishing him as a leading actor in Tamil cinema. Vijay's career is characterized by his versatility, spanning various genres including action, drama, and comedy. He is widely recognized for his roles in successful films like Ghilli (2004), which solidified his status as an action star, and Thuppakki (2012), where his portrayal of a military officer fighting terrorism received acclaim for its engaging narrative and action sequences. His performance in Mersal (2017), where he played multiple roles including a magician and a doctor, was particularly noted for its emotional depth and social commentary. Vijay's 2019 film Bigil, where he portrayed both a gangster and a football coach, was a major commercial success and showcased his ability to handle complex dual roles while addressing social issues such as women's empowerment. His 2021 film Master, where he played an engaging anti-hero, was another notable success, further cementing his status as a major star. Beyond his cinematic achievements, Vijay is also known for his philanthropic efforts. He has been involved in various charitable initiatives, including contributions to education and healthcare, reflecting his commitment to giving back to society. Vijay’s involvement in social causes and his dedication to improving the lives of others have earned him respect and admiration beyond his film career. His popularity is further evidenced by his massive fan base and his influence in the Tamil film industry, where he is regarded as one of the most beloved and influential figures. Vijay’s enduring impact is marked by his exceptional acting talent, diverse filmography, and commitment to societal betterment, securing his legacy as a revered and impactful figure in Indian cinema.`,
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
      about:`Vikram, born on April 17, 1966, in Chennai, India, is a highly acclaimed actor known for his exceptional versatility and dedication to Tamil cinema. With a career spanning over three decades, Vikram has established himself as one of the most respected and influential figures in Indian cinema. He began his career with minor roles in films during the 1980s, but his breakthrough came with the 1990 film Sethu, directed by Bala, where he delivered a critically acclaimed performance as a troubled young man. This role showcased his remarkable ability to immerse himself in complex characters and marked the beginning of his rise to prominence. Vikram's career is distinguished by his willingness to take on diverse and challenging roles across various genres. His performance in the 2003 film Saamy, where he played a tough, principled police officer, was widely praised and became a major commercial success. He continued to impress audiences with his versatility in films like Anniyan (2005), where he portrayed a man with multiple personalities seeking justice, and I (2015), where he underwent a dramatic physical transformation to play a model turned antagonist. His role in Raavanan (2010), where he played the antagonist in a retelling of the Ramayana, was notable for its depth and complexity, further cementing his reputation as an actor capable of handling intricate and multifaceted roles. Vikram's dedication to his craft is evident in his willingness to undergo physical transformations and invest in his characters, making his performances memorable and impactful. Beyond his cinematic achievements, Vikram is also involved in philanthropy and charitable activities, reflecting his commitment to giving back to society. His contributions to both cinema and social causes have earned him numerous awards and a dedicated fan base. Vikram's enduring influence in the film industry is marked by his exceptional acting talent, diverse filmography, and commitment to societal betterment, securing his legacy as one of Tamil cinema's most revered and impactful figures.`,
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
      imgPath:"MusicHome/Nazriya.jpg",
      about:`Nazriya Nazim, born on December 20, 1994, in Thiruvananthapuram, Kerala, is a distinguished Indian actress renowned for her compelling work in Malayalam and Tamil cinema. She began her acting career at a young age, debuting as a child artist in the 1999 Malayalam film Kannezhuthi Pottum Thottu. Her early involvement in the film industry laid a strong foundation for her future career. Transitioning to lead roles, Nazriya gained significant attention with her performances in Maad Dad (2013) and Neram (2013). Her breakthrough came with the critically acclaimed Malayalam film Bangalore Days (2014), where she played a key role as a vibrant and relatable young woman navigating the complexities of life and love in an urban setting. This role cemented her status as a leading actress and showcased her ability to bring depth and authenticity to her characters. Nazriya’s success extended to Tamil cinema with notable performances in films such as Raja Rani (2013), where she played a character that resonated with audiences for its emotional depth and relatability. Her versatility was further demonstrated in Thaana Serndha Kootam (2018), where her role was well-received for its engaging and dynamic portrayal. Additionally, her performance in Koode (2018), another Malayalam film, highlighted her talent for handling complex and emotionally nuanced roles with grace and sensitivity. Beyond her cinematic achievements, Nazriya is celebrated for her vibrant personality and active presence on social media, where she connects with her fans and shares aspects of her personal life. Her genuine and down-to-earth nature has endeared her to many, contributing to her widespread popularity and respect in the industry. Nazriya’s contributions to film, coupled with her growing fan base and industry acclaim, underscore her significant impact on South Indian cinema. Her journey from a child artist to a leading actress reflects her talent, dedication, and versatility, securing her place as one of the most cherished and influential figures in contemporary Indian cinema. With continued success and a diverse body of work, Nazriya Nazim remains a prominent and beloved actress in both Malayalam and Tamil film industries.`,
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
      about:`A.R. Rahman, born A. S. Dileep Kumar on January 6, 1967, in Chennai, India, is a globally acclaimed composer, singer, and music producer known for his groundbreaking contributions to Indian and international music. His journey into music began at a young age, influenced by his father, R.K. Shekhar, a composer and conductor. Rahman’s career took a significant turn in the early 1990s with his work on the soundtrack of the Tamil film Roja (1992), directed by Mani Ratnam. The film's score received widespread acclaim for its innovative fusion of Indian classical music with contemporary sounds, establishing Rahman as a fresh and influential voice in film music. This success was followed by a string of memorable soundtracks including Bombay (1995), Dil Se (1998), and Lagaan (2001), each showcasing his unique ability to blend diverse musical styles and create evocative scores that transcend cultural boundaries. Rahman's work on Lagaan earned him international recognition and an Academy Award nomination for Best Original Score, marking a milestone in his career. His win of two Academy Awards for Best Original Score and Best Original Song for Slumdog Millionaire (2008) further solidified his reputation as a globally renowned composer. Rahman’s music is characterized by its innovative fusion of traditional Indian music with global genres, creating a distinctive sound that has resonated with audiences worldwide. In addition to his film work, Rahman has released several successful albums, including Vande Mataram (1997), a patriotic album that showcased his versatility as a composer and performer. His influence extends beyond music; he is known for his philanthropy and dedication to various social causes, including education and humanitarian work through his foundation, the A.R. Rahman Foundation. Rahman’s impact on both the Indian and international music scenes is profound, as he continues to push the boundaries of music and inspire new generations of artists. His contributions to film music, coupled with his global accolades and philanthropic efforts, have earned him a place among the most celebrated and influential musicians of our time. A.R. Rahman’s enduring legacy is marked by his exceptional talent, innovative spirit, and commitment to using music as a means to connect cultures and make a positive impact on the world.`,
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
      about:`G.V. Prakash Kumar, born on June 13, 1987, in Chennai, India, is a prominent Indian music composer, singer, and actor known for his significant contributions to Tamil cinema. The nephew of acclaimed composer A.R. Rahman, G.V. Prakash Kumar began his career as a child artist in his uncle's film Vandicholai Chidambarams (1980). His foray into music composition began with the 2006 film Veyil, directed by Vasanthabalan. The soundtrack of Veyil was met with critical acclaim, marking G.V. Prakash as a promising new talent in the Tamil music industry. His ability to blend traditional Indian music with contemporary sounds quickly gained recognition, leading to a string of successful projects including Pasumpon (2008) and Aadukalam (2011). The soundtrack of Aadukalam, in particular, was highly praised and earned him several awards, solidifying his reputation as a versatile and innovative composer. G.V. Prakash's contributions extend beyond music composition; he made his acting debut with the film Pencil (2016), where he demonstrated his acting skills and continued to build a career in both music and acting. His subsequent film scores, such as those for Kadavul Irukaan Kumaru (2016) and Sardar (2022), have been well-received for their engaging melodies and creative arrangements. Known for his youthful energy and diverse musical style, G.V. Prakash has become a prominent figure in the Tamil film industry. His work often features a mix of genres and influences, reflecting his ability to adapt and innovate within the ever-evolving landscape of Indian cinema. In addition to his musical and acting endeavors, he is actively involved in philanthropy and social causes, contributing to various charitable initiatives. G.V. Prakash Kumar’s impact on Tamil cinema is marked by his exceptional talent, versatility, and dedication to his craft. His continued success as both a composer and actor highlights his significant role in shaping contemporary Indian music and cinema, securing his place as a respected and influential figure in the industry.`,
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
      about:`Anirudh Ravichander, born on October 16, 1990, in Chennai, India, is a highly acclaimed Indian music composer and singer known for his dynamic contributions to Tamil cinema. Emerging as one of the most influential figures in contemporary Indian music, Anirudh’s career began with a notable breakthrough in 2012 when he composed the soundtrack for the film 3, directed by Aishwarya R. Dhanush. The film’s hit single, "Why This Kolaveri Di," became a massive sensation, earning widespread acclaim for its catchy tune and innovative approach. This song established Anirudh as a fresh and exciting talent in the music industry, capturing the attention of audiences and critics alike. Following this success, Anirudh went on to compose for a series of successful films, including Kaththi (2014), Vedalam (2015), and Vivegam (2017). His work is characterized by a blend of modern sounds with traditional Indian music, creating vibrant and memorable soundtracks that resonate with diverse audiences. Anirudh’s musical style often incorporates a mix of genres, from peppy and energetic tracks to soulful melodies, showcasing his versatility and creativity. His contributions to films like Master (2021) and Beast (2022) have further solidified his reputation as a leading composer in the Tamil film industry. Known for his youthful energy and innovative approach, Anirudh has also ventured into live performances and concerts, gaining a significant fan following for his engaging stage presence and performances. In addition to his work in film music, Anirudh is involved in various philanthropic activities, reflecting his commitment to social causes. His continued success and influence in the music industry highlight his exceptional talent and ability to push the boundaries of contemporary film music. Anirudh Ravichander’s impact on Tamil cinema and Indian music is marked by his fresh sound, creative compositions, and dedication to his craft, securing his place as one of the most respected and influential music composers of his generation.`,
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
      about:`Vijay Antony, born on July 24, 1975, in Nagercoil, Tamil Nadu, India, is a versatile Indian film composer, actor, and producer, predominantly known for his work in Tamil cinema. He began his career as a music composer and gained early recognition with his breakthrough soundtrack for the film Sukran (2005). His ability to create innovative and captivating music quickly established him as a prominent composer in the Tamil film industry. Vijay Antony's unique style often blends traditional South Indian musical elements with contemporary sounds, resulting in memorable and popular film scores. His work on films such as Kundakka Mandakka (2005) and Naan (2012) showcased his ability to craft engaging and varied music that resonated with audiences. In 2012, Vijay Antony made a significant impact with the film Naan, which marked his debut as an actor. His performance was well-received, demonstrating his versatility and ability to handle diverse roles. This transition from music composition to acting was marked by further successes, including films like Salim (2014), where he played the lead role and showcased his acting prowess. His subsequent films, such as India Pakistan (2015) and Annadurai (2017), continued to highlight his acting skills and his ability to engage audiences across different genres. Vijay Antony's dual success as both a composer and an actor reflects his exceptional talent and dedication to his craft. In addition to his work in film, he is also involved in production, contributing to the growth and development of Tamil cinema. His contributions to both music and acting have earned him a dedicated fan base and respect within the industry. Vijay Antony's impact on Tamil cinema is marked by his innovative approach to music, his compelling performances as an actor, and his commitment to the film industry, securing his place as a respected and influential figure in Indian cinema.`,
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
      about:`Yuvan Shankar Raja, born on August 31, 1979, in Chennai, India, is a renowned Indian music composer and playback singer known for his significant contributions to Tamil cinema. As the son of the legendary composer Ilaiyaraaja, Yuvan Shankar Raja was introduced to music at a young age, and his talent became evident early on. He began his career as a music composer with the film Aravindhan (1995), but it was with his work on the soundtrack of Tamil (2002) that he gained widespread recognition. Yuvan’s innovative approach to music, characterized by a fusion of traditional Indian sounds with modern influences, quickly set him apart in the Tamil film industry. His ability to craft memorable and varied compositions has been evident in successful soundtracks such as those for Kangalal Kaidhu Sei (2003), Pudhiya Geethai (2003), and Kaadhal Kondein (2003). The latter, in particular, was a major hit and showcased his talent for creating emotionally resonant and musically diverse scores. Over the years, Yuvan has continued to impress with his versatility and creativity, contributing to a wide range of films, including Chennai 600028 (2007), Paiyaa (2010), and SIR (2022). His work often features a blend of different genres and styles, from peppy tracks and soulful melodies to intense background scores, reflecting his ability to adapt and innovate. In addition to his work as a composer, Yuvan Shankar Raja is also known for his playback singing, adding a personal touch to many of his compositions. His distinctive voice and emotional delivery have made his songs particularly popular among audiences. Yuvan’s influence extends beyond music composition, as he has also contributed to the growth of Tamil cinema through his innovative soundtracks and engaging performances. His dedication to his craft and his ability to connect with audiences through his music have earned him a dedicated fan base and significant respect in the industry. Yuvan Shankar Raja’s legacy in Indian cinema is marked by his exceptional musical talent, creative compositions, and enduring impact on the Tamil film industry, securing his place as one of the most celebrated and influential composers of his generation.`,
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
      about:`Billie Eilish, born Billie Eilish Pirate Baird O'Connell on December 18, 2001, in Los Angeles, California, is a groundbreaking American singer-songwriter known for her distinctive voice and genre-defying music. She gained prominence in 2015 with the release of her debut single, “Ocean Eyes,” which was written and produced by her brother, Finneas O'Connell. The song's success on SoundCloud and subsequent release on Spotify marked the beginning of her rise to fame. Eilish's debut EP, Don't Smile at Me (2017), further established her as a unique and influential artist, featuring a blend of pop, electro, and alternative sounds. Her debut full-length album, When We All Fall Asleep, Where Do We Go? (2019), was a commercial and critical success, showcasing her innovative approach to music with tracks like “Bad Guy” and “Bury a Friend.” The album earned her multiple Grammy Awards, including Album of the Year, Best New Artist, and Record of the Year, making her the youngest artist to win these top awards in a single night. Eilish’s music often explores themes of introspection, mental health, and personal experiences, resonating deeply with a wide audience. Her distinct style, characterized by a mix of whispery vocals, dark pop production, and introspective lyrics, has set her apart in the music industry. She continued to build on her success with her second album, Happier Than Ever (2021), which further demonstrated her growth as an artist and included hits like “Therefore I Am” and “Your Power.” The album was praised for its emotional depth and sonic evolution, earning her additional accolades and solidifying her place as a leading figure in contemporary music. Beyond her music career, Billie Eilish is known for her distinctive fashion sense, often embracing oversized clothing and unconventional styles that reflect her artistic persona. She is also recognized for her advocacy on various social and environmental issues, using her platform to raise awareness and promote change. Eilish’s impact on the music industry is marked by her innovative sound, introspective lyrics, and the ability to connect with a global audience, making her one of the most influential and celebrated artists of her generation. Her continued success and artistic evolution highlight her significant role in shaping contemporary music and popular culture.`,
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
      about:`Olivia Rodrigo, born on February 20, 2003, in Temecula, California, is a prominent American singer-songwriter and actress known for her impactful presence in contemporary pop music. She gained widespread recognition with the release of her debut single, “drivers license,” in January 2021. The song quickly became a cultural phenomenon, topping charts worldwide and resonating with audiences for its poignant lyrics and emotional depth. Rodrigo's debut album, SOUR (2021), was a critical and commercial success, showcasing her talent for crafting relatable and introspective pop music. The album features a blend of pop, rock, and indie influences, with standout tracks like “good 4 u” and “traitor,” which further solidified her status as a rising star in the music industry. Rodrigo's songwriting often explores themes of heartache, self-discovery, and personal growth, capturing the experiences of young adulthood with authenticity and emotional nuance. Her distinctive voice and raw, confessional lyrics have earned her widespread acclaim and a dedicated fan base. In addition to her music career, Olivia Rodrigo is also known for her acting work. She gained early recognition with her role as Nini Salazar-Roberts in the Disney+ series High School Musical: The Musical: The Series, which showcased her acting skills and musical talent. Her success as both a musician and actress has established her as a multifaceted and influential figure in entertainment. Rodrigo’s impact on popular culture is marked by her ability to connect with audiences through her heartfelt and relatable music, as well as her continued success and growth as an artist. Her debut achievements and ongoing contributions to music highlight her significant role in shaping contemporary pop and solidify her status as one of the most exciting and influential new artists of her generation.`,
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
      about:`Michael Jackson, born on August 29, 1958, in Gary, Indiana, is widely regarded as one of the most influential and iconic figures in the history of music and entertainment. Known as the "King of Pop," Jackson's career spanned over four decades, during which he revolutionized the music industry with his innovative approach to pop music, dance, and visual presentation. Starting his career as a child star with The Jackson 5, Michael Jackson gained prominence for his impressive vocal talent and stage presence. However, it was his solo career that truly cemented his status as a global superstar. His 1982 album Thriller remains the best-selling album of all time, with iconic tracks such as "Billie Jean," "Beat It," and the title track "Thriller" showcasing his groundbreaking music videos, dance moves, and genre-blending style. Jackson’s influence extended beyond music; his signature dance moves, such as the moonwalk, became legendary and were widely imitated and celebrated. His music videos, including those for "Thriller," "Bad," and "Smooth Criminal," set new standards for the genre, incorporating elaborate choreography, storytelling, and cutting-edge visual effects. Jackson's contributions to music were recognized with numerous awards, including multiple Grammy Awards and American Music Awards, highlighting his exceptional talent and impact on the industry. In addition to his musical achievements, Jackson was known for his philanthropic efforts, including support for various charities and humanitarian causes. Despite facing personal and legal challenges throughout his life, his legacy as a pioneer in music and entertainment endures. Michael Jackson's influence on pop culture, his innovative approach to music and dance, and his enduring appeal continue to inspire artists and entertain audiences worldwide. His contributions to music and performance have left an indelible mark on the world, securing his place as one of the most celebrated and transformative figures in the history of entertainment.`,
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
      about:`Shakira, born Shakira Isabel Mebarak Ripoll on February 2, 1977, in Barranquilla, Colombia, is a globally renowned singer, songwriter, dancer, and philanthropist known for her distinctive blend of Latin, Arabic, and rock influences. Her music career began in the early 1990s with her debut albums in Spanish, but she gained international fame with her crossover English-language album, Laundry Service (2001). This album featured hits like "Whenever, Wherever" and "Suerte (Whenever, Wherever)," which showcased her unique voice and eclectic style, blending Latin rhythms with pop and rock elements. Shakira's ability to combine different musical genres has made her a standout artist in the global music scene. Her subsequent albums, including Fijación Oral, Vol. 1 (2005) and She Wolf (2009), continued to highlight her versatility and innovation, with hits like "Hips Don't Lie," "Waka Waka (This Time for Africa)," and "Loca." The latter was especially notable as it became the official anthem for the 2010 FIFA World Cup, further establishing her as a prominent global artist. Shakira's music is characterized by its catchy melodies, rhythmic beats, and her signature hip-shaking dance moves, which have become a defining feature of her performances. Her influence extends beyond music; she is also known for her philanthropic work through the Barefoot Foundation, which focuses on providing education and support to underprivileged children in Colombia. Her dedication to social causes and her impactful contributions to both the music industry and global humanitarian efforts have earned her widespread acclaim and respect. Shakira’s continued success, innovative approach to music, and commitment to charitable causes highlight her significant impact on both the entertainment industry and the world at large. Her dynamic career, marked by artistic achievements and social contributions, secures her place as one of the most influential and beloved artists of her generation.`,
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
      imgPath:"MusicHome/Eminem.jpg",
      about:`Eminem, born Marshall Bruce Mathers III on October 17, 1972, in St. Joseph, Missouri, is a highly influential American rapper, songwriter, and record producer known for his provocative lyrics and groundbreaking impact on hip-hop. Rising from a challenging upbringing in Detroit, Eminem first gained recognition with his 1996 debut album, Infinite, but it was his 1999 album, The Slim Shady LP, that catapulted him to stardom. The album's raw, confessional style and controversial themes, coupled with hits like "My Name Is," earned him critical acclaim and commercial success. Eminem's follow-up albums, including The Marshall Mathers LP (2000) and The Eminem Show (2002), solidified his position as one of the genre's leading figures. The Marshall Mathers LP became one of the best-selling albums in U.S. history, featuring iconic tracks like "Stan," "The Real Slim Shady," and "Without Me." Eminem's lyrical prowess, characterized by his rapid-fire delivery, intricate rhyme schemes, and autobiographical storytelling, has earned him widespread respect in the music industry. His work often explores themes of personal struggle, societal issues, and controversial topics, reflecting his complex and sometimes tumultuous life experiences. Despite facing significant controversy and criticism over his explicit content and provocative themes, Eminem has consistently demonstrated his ability to push boundaries and challenge norms within the music industry. His influence extends beyond his music; he has also made significant contributions to film, particularly with his semi-autobiographical movie 8 Mile (2002), which earned him an Academy Award for Best Original Song for "Lose Yourself." Eminem's continued success, marked by multiple Grammy Awards, record-breaking albums, and a lasting impact on hip-hop culture, underscores his role as a transformative and enduring figure in the music world. His career, characterized by both commercial success and artistic innovation, cements his place as one of the most influential and controversial artists of his generation.`,
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
          <div className='img-with-desc' style={{"width":"1200px"}}>
              <DynamicImageDisplay path={currentActor.imgPath} />
              <div>
                <p>{currentActor.about.length>1750?currentActor.about.substring(0,1750)+".....":currentActor.about}</p>
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