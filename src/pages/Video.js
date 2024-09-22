import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'

import '../Styles/video.css'
import DynamicImageDisplay from '../Components/DynamicImageDisplay'

const Video = () => {

  let {name}=useParams();

  const[currentMovie,setCurrentMovie]=useState({
    name:"Aegan",
    path:"video/Tamil/Actors/Ajith/movies/Aegan.jpg",
    desc:`Aegan (2008) is a Tamil-language action-comedy film directed by Raju Sundaram, starring Ajith Kumar, Nayanthara, and Navdeep. The story revolves around a police officer, played by Ajith Kumar, who is assigned a mission to bring down a notorious gangster while juggling his personal life and family responsibilities. The film blends action, comedy, and romance, with Ajith Kumar's charismatic performance being a highlight. Known for its energetic music by Yuvan Shankar Raja and its engaging plot, Aegan offers a mix of thrilling sequences and light-hearted moments.`,
    link:"https://www.youtube.com/embed/AIjYJYf3yrw?si=yEug90BtM5uwo7WI"
  });

  

  

  useEffect(()=>{

    const movies=new Map();

    movies.set("Aegan",{
      name:"Aegan",
      path:"video/Tamil/Actors/Ajith/movies/Aegan.jpg",
      desc:`Aegan (2008) is a Tamil-language action-comedy film directed by Raju Sundaram, starring Ajith Kumar, Nayanthara, and Navdeep. The story revolves around a police officer, played by Ajith Kumar, who is assigned a mission to bring down a notorious gangster while juggling his personal life and family responsibilities. The film blends action, comedy, and romance, with Ajith Kumar's charismatic performance being a highlight. Known for its energetic music by Yuvan Shankar Raja and its engaging plot, Aegan offers a mix of thrilling sequences and light-hearted moments.`,
      link:"https://www.youtube.com/embed/AIjYJYf3yrw?si=yEug90BtM5uwo7WI"
    });
  
    movies.set("Billa",{
      name:"Billa",
      path:"video/Tamil/Actors/Ajith/movies/Billa.webp",
      desc:`Billa (2007) is a Tamil action-thriller directed by Vishnuvardhan, featuring Ajith Kumar in dual roles. A remake of the 1980 film, Ajith plays both the feared international don Billa and Saravana, a look-alike who impersonates him after Billa's death to assist the police. Known for its stylish action and slick cinematography by Nirav Shah, the film also stars Nayanthara, Namitha, and Prabhu. With music by Yuvan Shankar Raja, Billa was a major success, praised for Ajith's performance and the film’s visual flair. Its popularity led to a prequel, Billa 2, in 2012.`,
      link:"https://www.youtube.com/embed/E2e6-Vi-VKs?si=BtjJkmk9WYIPJSou"
    });
  
    movies.set("Mankatha",{
      name:"Mankatha",
      path:"video/Tamil/Actors/Ajith/movies/Mankatha.jpg",
      desc:`Mankatha (2011) is a Tamil action-thriller directed by Venkat Prabhu, starring Ajith Kumar in his 50th film. Ajith plays Vinayak Mahadevan, an anti-hero and a corrupt police officer who masterminds a plan to steal ₹500 crore from a gambling syndicate. The ensemble cast includes Arjun, Trisha, Vaibhav, and Premgi Amaren. Known for its twists, gripping storyline, and Ajith's bold portrayal of a ruthless character, *Mankatha* was a major commercial success. Yuvan Shankar Raja's music and the film's stylish direction contributed to its popularity, making it one of Ajith's most celebrated films.`,
      link:"https://www.youtube.com/embed/vHESM8iR1JE?si=eFdm4Zn4rSJMEte_"
    });
  
  
  
  
  
    movies.set("Thunivu",{
      name:"Thunivu",
      path:"video/Tamil/Actors/Ajith/movies/Thunivu.jpg",
      desc:`Thunivu (2023) is a Tamil action-heist film directed by H. Vinoth, starring Ajith Kumar as a mysterious mastermind behind a bank robbery. The plot revolves around a meticulously planned heist that uncovers deeper layers of corruption and conspiracy. Ajith's portrayal of a cunning, unpredictable character brought a fresh edge to the film, which also stars Manju Warrier in a significant role. Known for its high-octane action sequences and social commentary, Thunivu received praise for its fast-paced narrative, with Ghibran's music amplifying the tension. It became a commercial hit, adding to Ajith's legacy of action-packed roles.`,
      link:"https://www.youtube.com/embed/jnBZboK17_A?si=J0Wtfvprn2MrMRUr"
    });
  
    movies.set("24",{
      name:"24",
      path:"video/Tamil/Actors/Samantha/movies/24.jpg",
      desc:`24 (2016) is a Tamil science fiction thriller directed by Vikram Kumar, starring Suriya in triple roles as a scientist, his evil brother, and the scientist's son. The story revolves around a time-traveling watch invented by the scientist, Sethuraman, which his villainous twin, Athreya, seeks to steal. The son, Mani, later discovers the watch and its capabilities, leading to a battle across time to prevent Athreya from altering history. Known for its innovative concept, stunning visuals, and Suriya's impressive performance in multiple roles, 24 was both a critical and commercial success. The film's music by A. R. Rahman was also highly acclaimed.`,
      link:"https://www.youtube.com/embed/wqXE_es_I3M?si=TAAk5RKxMk6a-HYx"
    });
  
    movies.set("BanaKaathadi",{
      name:"BanaKaathadi",
      path:"video/Tamil/Actors/Samantha/movies/BanaKaathadi.jpg",
      desc:`Bana Kaathadi (2010) is a Tamil romantic drama directed by Badri Venkatesh, starring Atharvaa and Samantha in lead roles. The film tells the story of Ramesh, a young man from a lower socioeconomic background with a passion for flying kites, who falls in love with Priya, a rich girl. Their love story unfolds amid the backdrop of contrasting lifestyles, with the kite-flying culture serving as a metaphor for freedom and aspirations. Despite mixed reviews, Atharvaa and Samantha's performances were well received, and the film’s music by Yuvan Shankar Raja was appreciated for its melody.`,
      link:"https://www.youtube.com/embed/V2bAkMbAcg8?si=vMO4ZAguTd022inc"
    });
  
    movies.set("Kaththi",{
      name:"Kaththi",
      path:"video/Tamil/Actors/Samantha/movies/Kaththi.jpg",
      desc:`Kaththi (2014) is a Tamil action-drama directed by A.R. Murugadoss, featuring Vijay in a dual role. The film follows Kathiresan, a small-time crook who impersonates his look-alike, a social activist named Jeevanandham, to escape from trouble. As Kathiresan gets involved in Jeevanandham's fight against a corrupt corporation that exploits farmers, he discovers his own moral compass. With its strong social message, gripping plot, and Vijay's compelling performances, Kaththi was a major commercial success. The film's music, composed by Anirudh Ravichander, and its powerful dialogues contributed to its widespread acclaim.`,
      link:"https://www.youtube.com/embed/bMf0IyzyKt4?si=5Yf8_dlMZR1_f1Oc"
    });
  
    movies.set("Theri",{
      name:"Theri",
      path:"video/Tamil/Actors/Samantha/movies/Theri.jpg",
      desc:`Theri (2016) is a Tamil action-drama directed by Atlee, starring Vijay in a powerful dual role. The film revolves around Vijay's character, a former police officer who leads a peaceful life with his daughter but is forced to confront his past when a dangerous criminal threatens his family. The story explores themes of justice and revenge, with Vijay delivering a strong performance as both a loving father and a determined cop. Theri was well-received for its engaging plot, emotional depth, and high-energy action sequences. The music, composed by G.V. Prakash Kumar, and Vijay’s dynamic presence contributed to the film’s success at the box office.`,
      link:"https://www.youtube.com/embed/ZK4uGLpkAKk?si=F2pViMdfY65Oi4H8"
    });
  
  
  
  
    movies.set("Ayan",{
      name:"Ayan",
      path:"video/Tamil/Actors/Surya/movies/Ayan.jpg",
      desc:`Ayan (2009) is a Tamil action-thriller directed by K.V. Anand, starring Suriya and Tamannaah. The film centers around the character of Surya, a small-time smuggler who becomes entangled in a high-stakes international smuggling operation involving rare diamonds. As he navigates the dangerous world of crime, he finds himself in a battle against a powerful rival. Known for its thrilling plot, stylish direction, and Suriya's charismatic performance, Ayan was both critically acclaimed and commercially successful. The film's music, composed by Harris Jayaraj, added to its appeal, making it a standout entry in Tamil cinema.`,
      link:"https://www.youtube.com/embed/tZB-D7eRha4?si=otROEy-jG5_Hk_YY"
    });
  
    movies.set("Kappan",{
      name:"Kappan",
      path:"video/Tamil/Actors/Surya/movies/Kappan.jpg",
      desc:`Kappan (2019) is a Tamil political thriller directed by Mu. Maran, starring M. Jayachandran, Arya, and Nayanthara. The film follows a police officer, portrayed by Arya, who is on a mission to arrest a dangerous criminal involved in a series of high-profile crimes. As he navigates the complexities of the case, he uncovers deep-rooted corruption and conspiracies. Kappan is noted for its intense narrative, strong performances, and sharp social commentary, with the film’s engaging screenplay and Arya's role being particularly highlighted.`,
      link:"https://www.youtube.com/embed/s7sa5Igm-xY?si=88YSovQT2oSNCGj4"
    });
  
    movies.set("Mattran",{
      name:"Mattran",
      path:"video/Tamil/Actors/Surya/movies/Mattran.jpg",
      desc:`Maattrraan (2012) is a Tamil science fiction action film directed by K.V. Anand, starring Suriya in a dual role. The story revolves around conjoined twins who are involved in a high-stakes corporate conspiracy. Suriya plays both roles, one as a dedicated scientist and the other as a villainous corporate manipulator, who eventually becomes embroiled in a battle over a groundbreaking technology. The film is praised for its innovative concept, Suriya's remarkable dual performance, and its visual effects. The music, composed by Harris Jayaraj, complements the film’s dynamic action and emotional scenes.`,
      link:"https://www.youtube.com/embed/RWc4gwEWOD8?si=in3UeV3WSTC4WaZe"
    });
  
    movies.set("Vikram",{
      name:"Vikram",
      path:"video/Tamil/Actors/Surya/movies/Vikram.jpg",
      desc:`Vikram (2022) is a Tamil action thriller directed by Lokesh Kanagaraj, featuring Kamal Haasan, Vijay Sethupathi, and Fahadh Faasil in lead roles. The film follows a retired cop, played by Kamal Haasan, who is drawn back into action when a series of murders orchestrated by a mysterious antagonist disrupts the peace. The movie blends intense action sequences with a gripping narrative and explores themes of justice and redemption. Known for its high-octane thrills and stellar performances, Vikram received widespread acclaim for its direction, screenplay, and the powerful performances by its lead actors. The film’s music, composed by Anirudh Ravichander, further elevated its impact.`,
      link:"https://www.youtube.com/embed/OKBMCL-frPU?si=ffs2cy-D_7rWpaa4"
    });
  
  
  
  
  
  
    movies.set("IndiaPakistan",{
      name:"IndiaPakistan",
      path:"video/Tamil/Actors/VijayAntony/movies/IndiaPakistan.jpg",
      desc:`India Pakistan (2008) is a Tamil romantic comedy directed by Ahmed. The film stars Srikanth and Priyamani in the lead roles, with a plot revolving around a humorous take on cross-border romance. Srikanth plays a man from India who falls in love with Priyamani, a Pakistani woman, leading to comedic and dramatic situations as they navigate the complexities of their relationship amid cultural and national tensions. The film is known for its light-hearted approach and entertaining storyline, with engaging performances by the lead actors and a soundtrack composed by Yuvan Shankar Raja.`,
      link:"https://www.youtube.com/embed/H-Y-bxB-NVs?si=AzA3evbXa31dgFC6"
    });
  
    movies.set("Naan",{
      name:"Naan",
      path:"video/Tamil/Actors/VijayAntony/movies/Naan.jpg",
      desc:`Naan (2012) is a Tamil psychological thriller directed by Jeeva Shankar, featuring Vikram in the lead role. The film follows a man named Arumugham, played by Vikram, who becomes entangled in a series of mysterious events after he moves to a new city. As he unravels the secrets behind the strange occurrences, he discovers a shocking truth about his own past. Naan is known for its suspenseful plot, Vikram’s intense performance, and its engaging narrative that keeps the audience on edge. The film's music, composed by A.R. Rahman, complements the suspenseful atmosphere and adds to the overall impact.`,
      link:"https://www.youtube.com/embed/AcuqzxS-0VM?si=a8SEJ6YAkoz-4yBH"
    });
  
    movies.set("Pichaikaran",{
      name:"Pichaikaran",
      path:"video/Tamil/Actors/VijayAntony/movies/Pichaikaran.jpg",
      desc:`Pichaikaran (2016) is a Tamil drama directed by Sasi, starring Vijay Antony in the lead role. The film follows a wealthy businessman who adopts a life of poverty and becomes a beggar to save his ailing mother. As he navigates the harsh realities of life on the streets, he uncovers deep-seated issues within his own family and society. Pichaikaran is notable for its emotional depth, Vijay Antony’s compelling performance, and its social message. The film's music, composed by Vijay Antony himself, plays a significant role in enhancing the emotional and dramatic moments of the story.`,
      link:"https://www.youtube.com/embed/m2gaBEJxoxY?si=ltDyq0ySqWLCRMoh"
    });
  
    movies.set("Salim",{
      name:"Salim",
      path:"video/Tamil/Actors/VijayAntony/movies/Salim.jpg",
      desc:`Salim (2014) is a Tamil action-drama directed by N.V. Nirmal Kumar, starring Vijay Antony in the lead role. The film tells the story of Salim, a young man who becomes entangled in a dangerous world of crime and corruption while trying to help his family and loved ones. As he gets deeper into the criminal underworld, he faces moral dilemmas and struggles to maintain his integrity. Salim is known for its engaging narrative, Vijay Antony's strong performance, and its exploration of themes related to crime and justice. The film’s soundtrack, composed by Vijay Antony, complements its dramatic and action-packed moments.`,
      link:"https://www.youtube.com/embed/vuYfgo-D5H8?si=8M1aHiJYmtZZsvZ5"
    });
  
  
  
  
  
  
  
    movies.set("10endrathukulla",{
      name:"10endrathukulla",
      path:"video/Tamil/Actors/Vikram/movies/10endrathukulla.jpg",
      desc:`10 Endrathukulla (2015) is a Tamil action-comedy directed by Vijay Milton, starring Vikram and Samantha Ruth Prabhu. The film follows the adventures of a professional driver, played by Vikram, who becomes embroiled in a high-stakes chase involving a stolen bag and various criminal factions. The plot centers around his efforts to deliver the bag to its intended destination while dealing with numerous obstacles and comical situations. Known for its fast-paced action, humor, and Vikram's charismatic performance, 10 Endrathukulla also features a lively soundtrack composed by D. Imman.`,
      link:"https://www.youtube.com/embed/3vygWI0XK4E?si=Tf8YllqQNsj7c6uu"
    });
  
    movies.set("I",{
      name:"I",
      path:"video/Tamil/Actors/Vikram/movies/I.jpg",
      desc:`I (2015) is a Tamil science fiction romantic thriller directed by Shankar, starring Vikram and Amy Jackson. The film follows the story of Lingesan, a bodybuilder who undergoes a dramatic physical transformation due to a mysterious serum. The plot intertwines elements of romance, revenge, and action as Lingesan battles against a powerful adversary and struggles with his own personal demons. Known for its grand visuals, elaborate sets, and Vikram's intense performance, I was notable for its ambitious production and special effects. The music, composed by A.R. Rahman, played a significant role in enhancing the film's dramatic and emotional impact.`,
      link:"https://www.youtube.com/embed/phW8jZfEISs?si=EKyCP-kWJ8lp6x2D"
    });
  
    movies.set("Irumugan",{
      name:"Irumugan",
      path:"video/Tamil/Actors/Vikram/movies/Irumugan.jpg",
      desc:`Iru Mugan (2016) is a Tamil science fiction action thriller directed by Anand Shankar, featuring Vikram in dual roles alongside Nayanthara and Nithya Menen. The film revolves around an intelligence officer, played by Vikram, who is on a mission to capture a notorious terrorist known for his deadly chemical weapon. As the story unfolds, it delves into themes of terrorism, espionage, and personal vendettas. Iru Mugan is known for its engaging plot, Vikram's versatile performance, and its high-tech action sequences. The film's music, composed by Harris Jayaraj, complements its thrilling and dramatic moments.`,
      link:"https://www.youtube.com/embed/0sjudcc3ItU?si=MIB9QOZt0O1UEZS_"
    });
  
    movies.set("Mahan",{
      name:"Mahan",
      path:"video/Tamil/Actors/Vikram/movies/Mahan.webp",
      desc:`Mahan (2023) is a Tamil action thriller directed by Karthik Subbaraj, starring Vikram, Dhruv Vikram, and Simran. The film explores the complex relationship between a father and his son as they become entangled in a dangerous world of crime and politics. The story delves into themes of power, family, and moral conflict, with Vikram and Dhruv Vikram delivering powerful performances. Known for its gripping narrative and intense action sequences, Mahan combines thrilling drama with emotional depth, while its music by Santhosh Narayanan adds to the film's impact.`,
      link:"https://www.youtube.com/embed/i4ORfM-q35Y?si=NBE_SE8S-DHTBvuD"
    });
  
  
  
  
  
  
    movies.set("kaithi",{
      name:"kaithi",
      path:"video/Tamil/Directors/loki/movies/kaithi.jpg",
      desc:`Kaithi (2019) is a Tamil action thriller directed by Lokesh Kanagaraj, starring Karthi in the lead role. The film follows Dilli, a recently released prisoner, who is tasked with transporting a police officer to safety while trying to reunite with his daughter. The plot unfolds in real-time, focusing on his struggle against a gang and the clock as he faces numerous challenges. Kaithi is praised for its intense and gripping narrative, Karthi's compelling performance, and its minimalistic approach to action. The film’s soundtrack, composed by Sam C.S., and its strong direction contribute to its success and critical acclaim.`,
      link:"https://www.youtube.com/embed/g79CvhHaj5I?si=8MHzKuTp16NiDuXO"
    });
  
    movies.set("leo",{
      name:"leo",
      path:"video/Tamil/Directors/loki/movies/leo.jpg",
      desc:`Leo (2023) is a Tamil action thriller directed by Lokesh Kanagaraj, starring Vijay, Sanjay Dutt, and Trisha Krishnan. The film follows a complex storyline involving Leo, portrayed by Vijay, who becomes embroiled in a series of violent confrontations and conspiracies after his peaceful life is disrupted. Known for its intense action sequences, compelling performances, and intricate plot, Leo explores themes of revenge and redemption. The film's music, composed by Anirudh Ravichander, enhances its dramatic and emotional moments, contributing to its strong reception at the box office and among critics.`,
      link:"https://www.youtube.com/embed/Po3jStA673E?si=UtfYtSZPyXR4OZ7r"
    });
  
    movies.set("managaram",{
      name:"managaram",
      path:"video/Tamil/Directors/loki/movies/managaram.jpg",
      desc:`Managaram (2017) is a Tamil crime thriller directed by Lokesh Kanagaraj. The film weaves together multiple storylines set in the city of Chennai, focusing on various characters whose lives intersect due to a series of violent events. The narrative explores themes of crime, violence, and societal issues, with a strong emphasis on realistic portrayals and gripping storytelling. Known for its intense and engaging plot, Managaram received praise for its direction, screenplay, and the performances of its ensemble cast, including Sundeep Kishan, Sri, and Regina Cassandra. The film's music, composed by Javed Riaz, complements its tense and dramatic atmosphere.`,
      link:"https://www.youtube.com/embed/R7MR12XOMGQ?si=UGW1IZt417Q4qGrF"
    });
  
    movies.set("master",{
      name:"master",
      path:"video/Tamil/Directors/loki/movies/master.jpg",
      desc:`Master (2021) is a Tamil action-thriller directed by Lokesh Kanagaraj, featuring Vijay and Vijay Sethupathi in lead roles. The film follows the story of JD, played by Vijay, an alcoholic professor who is sent to reform a juvenile school, where he clashes with Bhavani, a ruthless gangster played by Vijay Sethupathi. The narrative explores the intense battle of wits and morality between the two characters, with a backdrop of corruption and crime. Known for its high-energy action sequences, strong performances, and engaging storyline, Master received widespread acclaim. Anirudh Ravichander’s music and Lokesh Kanagaraj’s direction contributed to its success, making it a significant hit in Tamil cinema.`,
      link:"https://www.youtube.com/embed/UTiXQcrLlv4?si=sCFirrOz-MpT3Z_r"
    });
  
  
  
  
  
  
  
    movies.set("kaatru-veliyidai",{
      name:"kaatru-veliyidai",
      path:"video/Tamil/Directors/maniratnam/movies/kaatru-veliyidai.jpg",
      desc:`Kaatru Veliyidai (2017) is a Tamil romantic drama directed by Mani Ratnam, featuring Karthi and Aditi Rao Hydari in the lead roles. The film tells the story of a fighter pilot, played by Karthi, and his tumultuous relationship with a doctor, portrayed by Aditi Rao Hydari, set against the backdrop of the Kargil War. The narrative explores themes of love, sacrifice, and the complexities of relationships under extreme circumstances. Known for its stunning cinematography, soulful music by A.R. Rahman, and Mani Ratnam's masterful direction, Kaatru Veliyidai received praise for its emotional depth and visual appeal.`,
      link:"https://www.youtube.com/embed/xZS21vNdUyQ?si=kHSFH6qBLcS4pkdC"
    });
  
    movies.set("ok-kanmani",{
      name:"ok-kanmani",
      path:"video/Tamil/Directors/maniratnam/movies/ok-kanmani.jpg",
      desc:`OK Kanmani (2015) is a Tamil romantic drama directed by Mani Ratnam, starring Dulquer Salmaan and Nithya Menen. The film explores the lives of a young couple who navigate the challenges of modern relationships while pursuing their personal ambitions. Set in the vibrant city of Mumbai, it focuses on their decision to live together before marriage and the complexities that arise from their commitment. Known for its engaging storyline, strong performances, and A.R. Rahman’s memorable soundtrack, OK Kanmani is praised for its contemporary take on romance and its refreshing portrayal of young love.`,
      link:"https://www.youtube.com/embed/2mBG4vlhcCc?si=yFXMKVjGsdSTNbKW"
    });
  
    movies.set("ps2",{
      name:"ps2",
      path:"video/Tamil/Directors/maniratnam/movies/ps2.jpg",
      desc:`Ponniyin Selvan 2 (2023) is the second installment in the historical epic film series directed by Mani Ratnam, based on the classic Tamil novel Ponniyin Selvan by Kalki Krishnamurthy. The film continues the saga of the Chola dynasty, focusing on the political intrigue, battles, and complex relationships within the royal court. With a stellar cast including Vikram, Aishwarya Rai Bachchan, Karthi, and Jayam Ravi, Ponniyin Selvan 2 is known for its grand visuals, elaborate sets, and compelling storytelling. The film's music, composed by A.R. Rahman, and Mani Ratnam's direction add to its cinematic splendor, making it a highly anticipated and successful continuation of the epic tale.`,
      link:"https://www.youtube.com/embed/EnhS3matIoU?si=F6K2vyCX4NOAhKHt"
    });
  
    movies.set("ravanan",{
      name:"ravanan",
      path:"video/Tamil/Directors/maniratnam/movies/ravanan.jpg",
      desc:`Raavanan (2010) is a Tamil-language epic action film directed by Mani Ratnam, featuring Vikram, Aishwarya Rai Bachchan, and Abhishek Bachchan. The film is a modern adaptation of the Ramayana, with Vikram portraying the antagonist Raavanan, who kidnaps Aishwarya Rai's character, Sita. Abhishek Bachchan plays the role of the protagonist, a police officer on a mission to rescue his wife. Raavanan is noted for its grand visuals, intricate storytelling, and a powerful soundtrack by A.R. Rahman. The film received praise for its performances and direction, though it had mixed reviews for its narrative and adaptation of the epic tale.`,
      link:"https://www.youtube.com/embed/1L6b5JJShrU?si=WkzVlcEBdQFHIPmR"
    });
  
  
  
  
  
  
  
  
    movies.set("kathi",{
      name:"kathi",
      path:"video/Tamil/Directors/murugadoss/movies/kathi.jpg",
      desc:`Kathi (2017) is a Tamil action-drama directed by A. R. Murugadoss, starring Vijay in a dual role. The film follows the story of Kathiresan, a small-time crook who leads a double life, and his alter ego, a man with a strong sense of justice who fights against corruption. The narrative explores themes of justice and redemption as the two characters' lives intersect in unexpected ways. Known for its engaging storyline, Vijay's compelling performances, and its powerful action sequences, Kathi received widespread acclaim. The film's music, composed by A.R. Rahman, further enhances its emotional and dramatic moments.`,
      link:"https://www.youtube.com/embed/bMf0IyzyKt4?si=q2-oEaLWEJoiQMk_"
    });
  
    movies.set("sarkar",{
      name:"sarkar",
      path:"video/Tamil/Directors/murugadoss/movies/sarkar.jpg",
      desc:`Sarkar (2018) is a Tamil political thriller directed by A.R. Murugadoss, starring Vijay in the lead role. The film centers on Sundar Reddy, a successful NRI who returns to India and becomes involved in political activism after witnessing widespread corruption and injustice. The story unfolds as Sundar takes on the political establishment, using his resources and influence to challenge systemic issues. Known for its powerful social message, Vijay's dynamic performance, and high-energy action sequences, Sarkar also features a compelling soundtrack by A.R. Rahman. The film received praise for its engaging narrative and Vijay's strong portrayal of a social reformer.`,
      link:"https://www.youtube.com/embed/VkkyaodksT4?si=VB5GDBFLoLCYUucm"
    });
  
    movies.set("spyder",{
      name:"spyder",
      path:"video/Tamil/Directors/murugadoss/movies/spyder.jpg",
      desc:`Spyder (2017) is a Tamil-Telugu bilingual action-thriller directed by A.R. Murugadoss, starring Mahesh Babu and Rakul Preet Singh. The film follows an intelligence officer, played by Mahesh Babu, who is tasked with catching a dangerous serial killer targeting the city. As he delves deeper into the case, he faces numerous challenges and discovers disturbing truths about the killer’s motives. Known for its intense action sequences, engaging plot, and Mahesh Babu's compelling performance, Spyder also features a soundtrack by Harris Jayaraj. The film was noted for its high production values and thriller elements.`,
      link:"https://www.youtube.com/embed/GIzMJ3atybQ?si=DshvBkjA6bVQXl2l"
    });
  
    movies.set("thuppaki",{
      name:"thuppaki",
      path:"video/Tamil/Directors/murugadoss/movies/thuppaki.jpg",
      desc:`Thuppakki (2012) is a Tamil action thriller directed by A.R. Murugadoss, starring Vijay and Kajal Aggarwal. The film follows Jagadish, an Indian Army officer, who is on a mission to dismantle a terrorist network in Mumbai. As he uncovers a plot involving multiple sleeper cells, he must use his skills and intelligence to thwart a major attack. Known for its gripping narrative, Vijay's charismatic performance, and high-octane action sequences, Thuppakki received widespread acclaim and was a major box office hit. The film's music, composed by Harris Jayaraj, and its direction contributed significantly to its success.`,
      link:"https://www.youtube.com/embed/aW_j4pNvG98?si=toPSAiV4rxYvvRly"
    });
  
  
  
  
  
  
  
  
  
  
  
  
    movies.set("2.0",{
      name:"2.0",
      path:"video/Tamil/Directors/shankar/movies/2.0.jpg",
      desc:`2.0 (2018) is a Tamil-language science fiction film directed by S. Shankar, featuring Rajinikanth, Akshay Kumar, and Amy Jackson. It is a sequel to the 2010 film Enthiran. The story follows Dr. Vaseegaran (Rajinikanth) and his android creation Chitti as they face a new threat from a powerful and vengeful scientist, Richard (Akshay Kumar), who has harnessed the power of mobile phone radiation to cause havoc. Known for its groundbreaking visual effects, high-octane action sequences, and Rajinikanth's dual performances, 2.0 was praised for its technological advancements and grand scale. The film’s soundtrack by A.R. Rahman further enhanced its epic narrative.`,
      link:"https://www.youtube.com/embed/jrETX2eDhL8?si=QCHwJ09ZS9wXIQhb"
    });
  
    movies.set("anniyan",{
      name:"anniyan",
      path:"video/Tamil/Directors/shankar/movies/anniyan.jpg",
      desc:`Anniyan (2005) is a Tamil psychological thriller directed by S. Shankar, starring Vikram in a dual role alongside Sada and Nayanthara. The film follows Ramanujam, a law-abiding citizen who suffers from dissociative identity disorder and develops multiple personalities, including a vigilante named Anniyan. As Anniyan seeks to punish those who commit sins and evade justice, the narrative explores themes of morality, justice, and psychological trauma. Known for its innovative special effects, Vikram’s powerful performance, and Shankar's grand direction, Anniyan was a major commercial success and received acclaim for its engaging storyline and dramatic intensity. The film’s music, composed by Harris Jayaraj, also contributed to its success.`,
      link:"https://www.youtube.com/embed/bzAxJDtS7zE?si=5SvgWj6xfg98o_8X"
    });
  
    movies.set("endhiran",{
      name:"endhiran",
      path:"video/Tamil/Directors/shankar/movies/endhiran.jpg",
      desc:`Enthiran (2010) is a Tamil science fiction film directed by S. Shankar, starring Rajinikanth, Aishwarya Rai Bachchan, and Danny Denzongpa. The film follows Dr. Vaseegaran (Rajinikanth), a scientist who creates an advanced humanoid robot named Chitti. However, when Chitti develops emotions and is manipulated, he becomes a threat to humanity. Enthiran is celebrated for its groundbreaking visual effects, innovative technology, and Rajinikanth’s dual performance as both the benevolent creator and the menacing robot. The film's high production values, A.R. Rahman's memorable soundtrack, and its epic storyline contributed to its massive success and critical acclaim.`,
      link:"https://www.youtube.com/embed/sY_F6issHsU?si=wL1_luHVG-E_6Dmb"
    });
  
    movies.set("i",{
      name:"i",
      path:"video/Tamil/Directors/shankar/movies/i.jpg",
      desc:`I (2015) is a Tamil science fiction romantic thriller directed by Shankar, featuring Vikram and Amy Jackson. The film tells the story of Lingesan, a bodybuilder who undergoes a dramatic transformation due to a mysterious serum. The plot revolves around his quest for revenge against those who wronged him, as he deals with the consequences of his new appearance. Known for its elaborate visual effects, Vikram's intense performance, and Shankar's grand direction, I was notable for its high production values. The music, composed by A.R. Rahman, played a significant role in enhancing the film's emotional and dramatic moments.`,
      link:"https://www.youtube.com/embed/phW8jZfEISs?si=OYs3gKUDYT4LLfAH"
    });
  
  
  
  
  
  
  
  
  
  
    movies.set("asuran",{
      name:"asuran",
      path:"video/Tamil/Directors/vetrimaran/movies/asuran.jpg",
      desc:`Asuran (2019) is a Tamil action-drama directed by Vetrimaaran, starring Dhanush and Manju Warrier. The film is based on the novel Vekkai by Poomani and tells the story of Sivasamy (Dhanush), a rural farmer who becomes embroiled in a violent conflict with a powerful landlord due to a land dispute. The narrative explores themes of caste discrimination, social injustice, and family loyalty. Known for its gritty realism, powerful performances, particularly by Dhanush, and Vetrimaaran's strong direction, Asuran received widespread acclaim and was a major commercial success. The film’s music, composed by G.V. Prakash Kumar, complements its intense and emotional storyline.`,
      link:"https://www.youtube.com/embed/vOCM9wztBYQ?si=aL0o7Dn5eAuTx-wp"
    });
  
    movies.set("paava-kadaigal",{
      name:"paava-kadaigal",
      path:"video/Tamil/Directors/vetrimaran/movies/paava-kadaigal.jpg",
      desc:`Paava Kadhaigal (2020) is a Tamil anthology film directed by Vetrimaaran, Gautham Menon, Sudha Kongara, and Vignesh Shivan. The film consists of four interconnected stories that explore themes of caste, honor, and societal issues in contemporary India. Each segment delves into the struggles and moral dilemmas faced by its characters, presenting a raw and realistic portrayal of various social issues. The film is noted for its strong performances by an ensemble cast, including Sai Pallavi, Kalidas Jayaram, and Anjali, and its compelling narratives. Paava Kadhaigal received praise for its storytelling and its powerful commentary on social issues.`,
      link:"https://www.youtube.com/embed/MteHcVk-_jo?si=yTvclW92I78LkQC1"
    });
  
    movies.set("vada-chennai",{
      name:"vada-chennai",
      path:"video/Tamil/Directors/vetrimaran/movies/vada-chennai.jpg",
      desc:`Vada Chennai (2018) is a Tamil gangster drama directed by Vetrimaaran, starring Dhanush, Aishwarya Rajesh, and Samantha Ruth Prabhu. The film spans several decades and follows the life of Anbu, portrayed by Dhanush, a young man who becomes entangled in the criminal underworld of North Chennai. The narrative delves into themes of crime, politics, and personal ambition, exploring the impact of gang wars and power struggles on individuals and their communities. Known for its gritty realism, intricate storytelling, and strong performances, particularly by Dhanush, Vada Chennai was critically acclaimed and praised for its authentic portrayal of life in Chennai's underworld. The film's music, composed by Santhosh Narayanan, complements its intense and dramatic atmosphere.`,
      link:"https://www.youtube.com/embed/q5GG5HJ1hVk?si=CGY7V1eLVaSkIhEy"
    });
  
    movies.set("viduthalai",{
      name:"viduthalai",
      path:"video/Tamil/Directors/vetrimaran/movies/viduthalai.jpg",
      desc:`Viduthalai (2023) is a Tamil crime drama directed by Vetrimaaran, featuring Soori and Vijay Sethupathi. The film is based on a short story from the novel Thunaivan by Jeyamohan and explores themes of police brutality and the struggle of marginalized communities. It follows the story of a police officer who is drawn into a complex and morally challenging situation involving an oppressed group. Known for its hard-hitting narrative and Vetrimaaran's distinctive storytelling style, Viduthalai has been praised for its realistic portrayal of societal issues and strong performances by the cast. The film's direction and screenplay have been highlighted for their depth and intensity.`,
      link:"https://www.youtube.com/embed/GYeSfq_bj_M?si=AJIyE3rsVp4X7r2E"
    });
  
  
  
  
  
  
  
  
  
    movies.set("Garudan",{
      name:"Garudan",
      path:"video/Tamil/New Release/garudan.jpeg",
      desc:`Garudan (2023) is a Tamil action-thriller directed by Aravind Ramesh, starring Sathyaraj, and newcomer Nithin Sathya. The film follows the story of an undercover cop who gets entangled in a web of crime and corruption while investigating a high-profile case. With its focus on crime, suspense, and action, *Garudan* is noted for its engaging plot and intense performances. The film's direction and screenplay aim to deliver a gripping experience, while its action sequences and dramatic moments contribute to its overall impact.`,
      link:"https://www.youtube.com/embed/B2yC1jpAYvQ?si=1E_jUNn1ZmSCGN7F"
    });
  
    movies.set("Goat",{
      name:"Goat",
      path:"video/Tamil/New Release/goat.jpeg",
      desc:`GOAT (2023) is a Tamil-language action drama directed by G.R. Adithya, starring Atharvaa Murali and Anjali in lead roles. The film follows the story of a young man who faces numerous challenges and adversities as he navigates his way through a tumultuous life. The narrative explores themes of struggle, resilience, and personal growth. Known for its engaging storyline, Atharvaa's strong performance, and impactful direction, GOAT aims to captivate audiences with its blend of action and drama. The film's soundtrack and cinematography further enhance its appeal.`,
      link:"https://www.youtube.com/embed/jxCRlebiebw?si=SL-OJ4tsQN8o84FP"
    });
  
    movies.set("Indian2",{
      name:"Indian2",
      path:"video/Tamil/New Release/indian2.jpg",
      desc:`Indian 2 (2024) is a Tamil-language political action drama directed by S. Shankar, and a sequel to the 1996 film Indian. The film stars Kamal Haasan reprising his role as Senapathi, a former freedom fighter who takes justice into his own hands. The story continues from where the first film left off, with Senapathi fighting against corruption and societal issues in contemporary India. Known for its high production values, grand visuals, and Kamal Haasan's powerful performance, Indian 2 builds on the legacy of its predecessor with a mix of intense action, political commentary, and dramatic storytelling. The film’s music, composed by A.R. Rahman, adds to its cinematic impact.`,
      link:"https://www.youtube.com/embed/3bvBUT5pQYY?si=lpcBM1LM3IvTKoXp"
    });
  
    movies.set("Maharaja",{
      name:"Maharaja",
      path:"video/Tamil/New Release/maharaja.jpg",
      desc:`Maharaja (2023) is a Tamil action drama directed by S. Shankar, starring Jayam Ravi in the lead role. The film revolves around the character of a prince who is thrust into the complexities of modern-day politics and power struggles. As he navigates through intrigue and conflict, the story delves into themes of royalty, justice, and leadership. Known for its engaging narrative, high-octane action sequences, and Jayam Ravi’s compelling performance, Maharaja combines dramatic elements with grand visuals and a strong soundtrack. The film’s direction and production values contribute to its appeal as a major cinematic experience.`,
      link:"https://www.youtube.com/embed/z37hCm4eges?si=DFTl2TGqlcsDCnDw"
    });
  
    movies.set("Star",{
      name:"Star",
      path:"video/Tamil/New Release/star.jpg",
      desc:`Star (2024) is a Tamil science fiction film directed by Arun Prabhu, featuring Silambarasan in the lead role. The film explores themes of space exploration and futuristic technology, following the journey of a scientist who makes groundbreaking discoveries that could change the course of human history. With a focus on high-tech visuals, compelling storytelling, and Silambarasan's dynamic performance, Star aims to captivate audiences with its innovative approach to science fiction. The film’s soundtrack and special effects enhance its futuristic and dramatic elements.`,
      link:"https://www.youtube.com/embed/5QlTZEogGrE?si=c5ms9cbHbQ_dQ8OT"
    });











  
    movies.set("KGF",{
      name:"KGF",
      path:"video/Tamil/Action/KGF.jpg",
      desc:`KGF (2018) is a Kannada-language period action film directed by Prashanth Neel, starring Yash in the lead role. The film is set in the 1970s and follows the story of Rocky, a young man who rises from poverty to become a powerful gangster in the Kolar Gold Fields. KGF is known for its high-octane action sequences, stylish visuals, and compelling narrative, depicting Rocky's journey through the underworld and his quest for power. The film's gripping storyline, Yash's powerful performance, and its dramatic soundtrack by Ravi Basrur contributed to its success and acclaim, making it a significant hit in Indian cinema.`,
      link:"https://www.youtube.com/embed/E0aPg9S1OcA?si=-qo9ptRe-psTazyE"
    });
  
    movies.set("Maari2",{
      name:"Maari2",
      path:"video/Tamil/Action/Maari2.jpg",
      desc:`Maari 2 (2018) is a Tamil-language action-comedy film directed by Balaji Mohan, and a sequel to the 2015 film Maari. The film stars Dhanush reprising his role as Maari, a local gangster known for his quirky personality and loyalty to his friends. The story continues with Maari facing off against a new antagonist, played by Tovino Thomas, who threatens his territory and his lifestyle. Maari 2 is known for its energetic action sequences, humor, and Dhanush's charismatic performance. The film’s music, composed by Yuvan Shankar Raja, complements its vibrant and entertaining style.`,
      link:"https://www.youtube.com/embed/ORZltL9glEA?si=3FxvxnX3srSwuDwl"
    });
  
    movies.set("Mahaan",{
      name:"Mahaan",
      path:"video/Tamil/Action/Mahaan.jpg",
      desc:`Mahaan (2022) is a Tamil action-drama directed by Karthik Subbaraj, starring Vikram, Dhruv Vikram, and Simran. The film revolves around the life of a man named Gandhi Mahaan, played by Vikram, who starts his life as a school teacher but becomes a powerful figure in the underworld due to his circumstances. The story explores themes of crime, power, and familial relationships, particularly focusing on the dynamic between Mahaan and his son, played by Dhruv Vikram. Mahaan is noted for its gripping narrative, intense performances, and strong direction, with its music composed by Santhosh Narayanan adding to the film's dramatic impact.`,
      link:"https://www.youtube.com/embed/i4ORfM-q35Y?si=t46BoqnKfSkKtOTV"
    });
  
    movies.set("Vikram",{
      name:"Vikram",
      path:"video/Tamil/Action/Vikram.jpg",
      desc:`Vikram (2022) is a Tamil-language action thriller directed by Lokesh Kanagaraj, starring Kamal Haasan in the lead role. The film follows a retired cop, played by Kamal Haasan, who is drawn back into action when a series of murders and crimes shake the city. As he investigates, he uncovers a larger conspiracy involving a powerful criminal network. Vikram is praised for its engaging storyline, high-octane action sequences, and Kamal Haasan's powerful performance. The film also features a strong supporting cast, including Fahadh Faasil and Vijay Sethupathi, and its soundtrack by Anirudh Ravichander complements the film’s intense and thrilling atmosphere.`,
      link:"https://www.youtube.com/embed/OKBMCL-frPU?si=-b2-tvmnV1anl1Vz"
    });
  
    movies.set("Vikram-Vedha",{
      name:"Vikram-Vedha",
      path:"video/Tamil/Action/Vikram-Vedha.jpg",
      desc:`Vikram Vedha (2017) is a Tamil-language neo-noir action thriller directed by Pushkar-Gayathri, starring Vijay Sethupathi and Madhavan in the lead roles. The film follows the story of Vikram, a tough police officer, and Vedha, a notorious gangster. The narrative is structured around a series of moral dilemmas and philosophical dialogues as Vikram and Vedha engage in a cat-and-mouse game. Vikram Vedha is noted for its compelling storytelling, strong performances, particularly by Vijay Sethupathi and Madhavan, and its intricate plot twists. The film's success led to a Hindi remake in 2022 starring Hrithik Roshan and Saif Ali Khan.`,
      link:"https://www.youtube.com/embed/eLucCWmf6V4?si=-uAdnC_s0cPBbnJe"
    });












  
    movies.set("Babylon",{
      name:"Babylon",
      path:"video/English/Actors/BradPitt/movies/Babylon.jpg",
      desc:`Babylon (2022) is an American epic period drama film directed by Damien Chazelle, featuring Brad Pitt, Margot Robbie, and Diego Calva in key roles. Set in 1920s Hollywood, during the transition from silent films to talkies, the film explores the rise and fall of various characters in the movie industry. Babylon delves into the chaotic, hedonistic, and glamorous world of early Hollywood, highlighting the personal and professional struggles of actors, directors, and filmmakers. Known for its lavish production design, vibrant storytelling, and striking cinematography, the film received praise for its bold narrative and stellar performances, particularly by Robbie and Pitt.`,
      link:"https://www.youtube.com/embed/5muQK7CuFtY?si=cADgngmOrhgdtoc4"
    });
  
    movies.set("MoneyBall",{
      name:"MoneyBall",
      path:"video/English/Actors/BradPitt/movies/MoneyBall.jpg",
      desc:`Moneyball (2011) is a sports drama directed by Bennett Miller, starring Brad Pitt, Jonah Hill, and Philip Seymour Hoffman. The film is based on the true story of Billy Beane (played by Pitt), the general manager of the Oakland Athletics baseball team, and his revolutionary approach to assembling a competitive team on a limited budget. Using statistical analysis and data-driven methods (sabermetrics), Beane and his assistant Peter Brand (Hill) challenge traditional scouting techniques, reshaping the game of baseball. Moneyball was praised for its sharp screenplay, outstanding performances, and its unique take on the intersection of sports and statistics.`,
      link:"https://www.youtube.com/embed/-4QPVo0UIzc?si=j3kMaCa-SlUWw-HN"
    });
  
    movies.set("Seven",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:`Se7en (1995) is a psychological thriller directed by David Fincher, starring Brad Pitt, Morgan Freeman, and Kevin Spacey. The film follows two detectives, the impulsive David Mills (Pitt) and the seasoned William Somerset (Freeman), as they investigate a series of gruesome murders linked to the seven deadly sins. As the detectives get closer to the elusive killer, played chillingly by Kevin Spacey, they become entangled in a dark and disturbing psychological game. Known for its gritty atmosphere, intense performances, and shocking climax, Se7en is considered a modern classic in the thriller genre. Its dark tone and themes of morality and justice have made it a highly influential film.`,
      link:"https://www.youtube.com/embed/znmZoVkCjpI?si=fMKkOGOToW5166um"
    });

    movies.set("Worldwarz",{
      name:"Worldwarz",
      path:"video/English/Actors/BradPitt/movies/Worldwarz.jpg",
      desc:`World War Z (2013) is a post-apocalyptic action-horror film directed by Marc Forster, starring Brad Pitt as Gerry Lane, a former United Nations investigator. The film follows Lane as he races against time to stop a global zombie pandemic that is rapidly destroying human civilization. As the infection spreads across continents, Lane travels around the world to uncover the origin of the outbreak and find a solution. Known for its intense action sequences, fast-paced narrative, and large-scale visual effects, World War Z received praise for its gripping suspense and Brad Pitt's strong performance. The film was a commercial success, becoming one of the highest-grossing zombie films of all time.`,
      link:"https://www.youtube.com/embed/Md6Dvxdr0AQ?si=GInq6Atb71NSIgjQ"
    });














    movies.set("BankJob",{
      name:"BankJob",
      path:"video/English/Actors/Jason/movies/BankJob.jpg",
      desc:`The Bank Job (2008) is a British heist thriller directed by Roger Donaldson, starring Jason Statham and Saffron Burrows. The film is based on the true story of a 1971 bank robbery in London, where a group of thieves break into a bank vault, only to uncover incriminating photos and documents involving powerful political figures and government officials. As the heist unravels, the robbers find themselves entangled in a dangerous web of corruption, blackmail, and conspiracy. The Bank Job is known for its gripping plot, suspenseful pacing, and strong performances, particularly by Statham, and was praised for blending elements of crime, drama, and historical intrigue.`,
      link:"https://www.youtube.com/embed/i6fbftpW4qU?si=J1JQ_7Vp2jYil_pN"
    });

    movies.set("Expandables",{
      name:"Expandables",
      path:"video/English/Actors/Jason/movies/Expandables.jpg",
      desc:`The Expendables (2010) is an action film directed by Sylvester Stallone, who also stars alongside an ensemble cast including Jason Statham, Jet Li, Dolph Lundgren, and Mickey Rourke. The film follows a group of elite mercenaries tasked with overthrowing a ruthless dictator on a small Caribbean island. As they embark on their mission, they face intense combat and personal challenges, leading to explosive action sequences typical of classic 80s and 90s action films. Known for its nostalgic appeal, The Expendables combines humor, camaraderie, and over-the-top action, featuring numerous nods to iconic action films and actors. The film was successful enough to spawn several sequels, each continuing the legacy of high-octane thrills and star power.`,
      link:"https://www.youtube.com/embed/8KtYRALe-xo?si=pJ9odp2hmbEGyoRO"
    });

    movies.set("FastandFurious",{
      name:"FastandFurious",
      path:"video/English/Actors/Jason/movies/FastandFurious.jpg",
      desc:`The Fast & Furious franchise is a highly popular action series that began with The Fast and the Furious (2001), directed by Rob Cohen. The films primarily focus on illegal street racing, heists, and espionage, featuring a core group led by Vin Diesel as Dominic Toretto and the late Paul Walker as Brian O'Conner. Over the years, the series has evolved from its street racing roots to encompass larger-scale heists and global missions, incorporating a mix of thrilling car chases, elaborate stunts, and themes of family and loyalty. Known for its diverse ensemble cast, high-octane action sequences, and iconic vehicles, the franchise has become a significant cultural phenomenon, with multiple sequels, spin-offs, and a massive fan base.`,
      link:"https://www.youtube.com/embed/FUK2kdPsBws?si=VCImXHbtQWcc50Y6"
    });

    movies.set("Spy",{
      name:"Spy",
      path:"video/English/Actors/Jason/movies/Spy.jfif",
      desc:`Spy (2015) is a comedy-action film directed by Paul Feig, starring Melissa McCarthy, Jason Statham, Rose Byrne, and Jude Law. The story follows Susan Cooper (McCarthy), a desk-bound CIA analyst who unexpectedly gets the chance to go undercover after her partner (Law) is compromised and a dangerous arms dealer threatens global security. Despite her lack of field experience, Susan uses her wit and resourcefulness to navigate the world of espionage, leading to hilarious and action-packed situations. The film received praise for its clever humor, strong performances—particularly by McCarthy—and its subversion of traditional spy genre tropes, making it both entertaining and relatable.`,
      link:"https://www.youtube.com/embed/YrY3v1eDmQY?si=Nj3VkKCdQVkAg9Hb"
    });










    movies.set("Chocolat",{
      name:"Chocolat",
      path:"video/English/Actors/JhonnyDepp/movies/Chocolat.jpg",
      desc:`Chocolat (2000) is a romantic drama directed by Lasse Hallström, based on the novel by Joanne Harris. The film stars Juliette Binoche as Vianne Rocher, a free-spirited chocolatier who opens a chocolate shop in a conservative French village during Lent. Her arrival and the indulgent treats she offers challenge the town's traditional values and stir up both curiosity and resistance among the locals, particularly the rigid mayor (Alfred Molina). The film explores themes of love, acceptance, and the transformative power of food. With its enchanting visuals and a rich score, Chocolat received critical acclaim and was nominated for several Academy Awards, highlighting the importance of community and the joys of life.`,
      link:"https://www.youtube.com/embed/32x33l2sLe8?si=4nanorDiD6cvbAoL"
    });

    movies.set("Edward",{
      name:"Edward",
      path:"video/English/Actors/JhonnyDepp/movies/Edward.jfif",
      desc:`Edward Scissorhands (1990) is a fantasy romance film directed by Tim Burton, starring Johnny Depp as Edward, an artificial man with scissors for hands. Created by an inventor who dies before finishing his work, Edward is left to navigate the world alone until a kind-hearted Avon saleswoman, Peg (Diane Wiest), discovers him and takes him to her suburban home. As Edward tries to fit in with the community, his unique abilities bring both wonder and chaos, highlighting themes of isolation, acceptance, and the struggle between conformity and individuality. The film is known for its whimsical visual style, haunting score by Danny Elfman, and Depp's poignant performance, making it a beloved classic that explores the nature of humanity and love.`,
      link:"https://www.youtube.com/embed/TBHIO60whNw?si=U293bFcdKA4iPzfe"
    });

    movies.set("POC",{
      name:"POC",
      path:"video/English/Actors/JhonnyDepp/movies/POC.jfif",
      desc:`Pirates of the Caribbean is a popular film franchise produced by Walt Disney Pictures, beginning with Pirates of the Caribbean: The Curse of the Black Pearl (2003), directed by Gore Verbinski. The series follows the adventures of Captain Jack Sparrow, played by Johnny Depp, a charming and eccentric pirate navigating treacherous waters and battling supernatural forces. The first film introduces Jack's quest to reclaim his stolen ship, the Black Pearl, while dealing with cursed pirates and a fierce British naval officer. The franchise is known for its blend of action, humor, and fantasy elements, along with memorable characters, intricate plots, and iconic music by Hans Zimmer. Over the years, the series has expanded with several sequels, becoming a significant part of pop culture and contributing to the revival of the pirate genre in cinema.`,
      link:"https://www.youtube.com/embed/yKgY_kz_LCs?si=bQX3WQ6D7ln8zya9"
    });

    movies.set("Tourist",{
      name:"Tourist",
      path:"video/English/Actors/JhonnyDepp/movies/Tourist.jpg",
      desc:`The Tourist (2010) is a romantic thriller directed by Florian Henckel von Donnersmarck, starring Johnny Depp and Angelina Jolie. The film follows Frank Tupelo (Depp), an American tourist visiting Venice, who becomes entangled in a web of intrigue when he meets Elise Clifton-Ward (Jolie), a beautiful woman with a mysterious past. As Frank is drawn into a game of cat-and-mouse involving law enforcement and criminals, he finds himself questioning Elise's true motives. The film is known for its stunning cinematography showcasing the beauty of Venice, along with its blend of romance, suspense, and charm. Despite mixed reviews from critics, it was appreciated for the chemistry between the lead actors and its entertaining plot twists.`,
      link:"https://www.youtube.com/embed/5XtbLezJtMg?si=HqWX59HUB0DlekgN"
    });












    movies.set("Avengers",{
      name:"Avengers",
      path:"video/English/Actors/RobertDowney/movies/Avengers.jfif",
      desc:`The Avengers (2012) is a superhero film directed by Joss Whedon, featuring an ensemble cast that includes Robert Downey Jr., Chris Evans, Scarlett Johansson, and Mark Ruffalo. It is based on the Marvel Comics superhero team and serves as a culmination of the Marvel Cinematic Universe (MCU) up to that point, bringing together iconic characters like Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye. The film follows Nick Fury, the director of S.H.I.E.L.D., as he assembles the team to stop the villain Loki from subjugating Earth with an alien army. Known for its thrilling action sequences, witty dialogue, and strong character dynamics, The Avengers was both a critical and commercial success, paving the way for further installments in the MCU and redefining the superhero genre in cinema.`,
      link:"https://www.youtube.com/embed/6ZfuNTqbHE8?si=u_rlyEItAPCaZSh3"
    });

    movies.set("DoctorDoom",{
      name:"DoctorDoom",
      path:"video/English/Actors/RobertDowney/movies/DoctorDoom.jpg",
      desc:`Doctor Doom, also known as Victor Von Doom, is a fictional supervillain appearing in Marvel Comics, primarily as the arch-nemesis of the Fantastic Four. Created by writer Stan Lee and artist Jack Kirby, he first appeared in The Fantastic Four #5 in 1962. A brilliant scientist and inventor, Doom is the ruler of the fictional country of Latveria and is known for his mastery of both science and sorcery. His character is defined by a combination of intelligence, ambition, and a deep-seated need for power and control, often driven by a desire to reclaim his lost honor and to prove himself superior to others. Doctor Doom is a complex villain, often portrayed with a tragic backstory, making him one of the most enduring and iconic figures in the Marvel Universe.`,
      link:"https://www.youtube.com/embed/F4-gDercv8M?si=aShNfYU_uE78ZZeJ"
    });

    movies.set("Ironman",{
      name:"Ironman",
      path:"video/English/Actors/RobertDowney/movies/Ironman.jfif",
      desc:`Iron Man is a superhero character from Marvel Comics, created by writer Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. First appearing in Tales of Suspense #39 in 1963, Iron Man is the alter ego of Tony Stark, a wealthy industrialist and genius inventor. After being kidnapped by terrorists, Stark builds a high-tech suit of armor to escape and subsequently uses it to protect the world from various threats. The character is known for his intelligence, charisma, and complex personality, often grappling with issues of responsibility and redemption. Iron Man became a central figure in the Marvel Cinematic Universe (MCU), with Robert Downey Jr. portraying the character in several films, starting with Iron Man (2008), which launched the MCU and revolutionized the superhero film genre.`,
      link:"https://www.youtube.com/embed/8ugaeA-nMTc?si=taWG1RupA595Ng8-"
    });

    movies.set("Sherlock",{
      name:"Sherlock",
      path:"video/English/Actors/RobertDowney/movies/Sherlock.jpg",
      desc:`Sherlock Holmes is a fictional detective created by Sir Arthur Conan Doyle, first appearing in the novel A Study in Scarlet in 1887. Renowned for his keen observational skills and logical reasoning, Holmes resides at 221B Baker Street in London, where he solves complex cases, often with the assistance of his friend and chronicler, Dr. John Watson. The character is famous for his use of forensic science, disguises, and deductive reasoning to unravel mysteries. Holmes has become an enduring cultural icon, appearing in numerous adaptations across film, television, and literature. The character's popularity has led to various interpretations, with notable portrayals by actors such as Basil Rathbone, Jeremy Brett, and Robert Downey Jr., solidifying Holmes as one of the most celebrated detectives in literary history.`,
      link:"https://www.youtube.com/embed/J7nJksXDBWc?si=RsIJxMxGO3Z52M4U"
    });













    movies.set("Hancock",{
      name:"Hancock",
      path:"video/English/Actors/WillSmith/movies/Hancock.jpg",
      desc:`Hancock (2008) is a superhero film directed by Peter Berg, starring Will Smith as John Hancock, an unconventional and troubled superhero with a tarnished reputation. Despite his superhuman powers, Hancock is disillusioned and often causes collateral damage while saving people, leading to public disdain. After saving a PR executive named Ray Embrey (Jason Bateman), Hancock is encouraged to improve his image and seek redemption. The film blends action, comedy, and drama, exploring themes of heroism, identity, and personal growth. While it received mixed reviews from critics, Will Smith's performance and the film's unique take on the superhero genre garnered attention, making it a noteworthy entry in the realm of superhero films.`,
      link:"https://www.youtube.com/embed/KS5E8r82l2g?si=Gwf2Yot4ciBcD3VU"
    });

    movies.set("Hitch",{
      name:"Hitch",
      path:"video/English/Actors/WillSmith/movies/Hitch.jfif",
      desc:`Hitch (2005) is a romantic comedy directed by Andy Tennant, starring Will Smith as Alex "Hitch" Hitchens, a professional "date doctor" who helps men win over the women of their dreams. The story follows Hitch as he encounters a challenge when he falls for a journalist named Sara Melas (Eva Mendes), who is investigating his secretive dating advice business. As he navigates the complexities of romance and his own feelings, the film explores themes of love, authenticity, and self-acceptance. Known for its charming humor and chemistry between Smith and Mendes, Hitch received positive reviews and was a commercial success, resonating with audiences for its lighthearted yet relatable take on modern dating.`,
      link:"https://www.youtube.com/embed/dMaq_pfxs-0?si=qxgksAqMOLU1ajYd"
    });

    movies.set("MIB",{
      name:"MIB",
      path:"video/English/Actors/WillSmith/movies/MIB.jpg",
      desc:`Men in Black (1997) is a sci-fi action-comedy directed by Barry Sonnenfeld, starring Will Smith and Tommy Lee Jones. The film follows a secret organization known as the Men in Black (MIB), who monitor and regulate extraterrestrial activity on Earth. Will Smith plays James Edwards, a street-smart NYPD officer who is recruited by the seasoned agent K (Jones) to join MIB. Together, they must stop an intergalactic threat while maintaining secrecy from the public. The film is known for its witty humor, imaginative aliens, and stylish visual effects, becoming a cultural phenomenon and leading to several sequels and spin-offs. Its blend of comedy and science fiction, along with a memorable score by Danny Elfman, contributed to its lasting popularity.`,
      link:"https://www.youtube.com/embed/BV-WEb2oxLk?si=lWfV4THzhhdpOeTY"
    });

    movies.set("POH",{
      name:"POH",
      path:"video/English/Actors/WillSmith/movies/POH.jpg",
      desc:`The Pursuit of Happyness (2006) is a biographical drama directed by Gabriele Muccino, starring Will Smith as Chris Gardner, a struggling salesman and single father. Based on Gardner's true story, the film follows his challenges while trying to provide a better life for his young son, played by Jaden Smith. After facing financial hardships and homelessness, Chris takes an unpaid internship at a brokerage firm, determined to secure a better future. The film is noted for its emotional depth, showcasing themes of perseverance, hope, and the father-son bond. Will Smith's powerful performance earned him critical acclaim, making The Pursuit of Happyness an inspiring tale of resilience and determination against all odds.`,
      link:"https://www.youtube.com/embed/DMOBlEcRuw8?si=pqXWs7gWh-96lqe4"
    });

















    movies.set("jw1",{
      name:"jw1",
      path:"video/English/Directors/ChadStahelski/movies/jw1.jpg",
      desc:`John Wick (2014) is an action-thriller film directed by Chad Stahelski, starring Keanu Reeves in the titular role. The story follows John Wick, a retired hitman mourning the death of his wife. His life is turned upside down when a group of criminals break into his home, steal his car, and kill his beloved dog, a final gift from his wife. Fueled by grief and vengeance, Wick returns to his former life, unleashing a relentless wave of violence against those who wronged him. The film is praised for its stylish action sequences, intricate world-building of the assassin underworld, and Reeves' committed performance. John Wick revitalized the action genre, leading to multiple sequels and establishing a dedicated fan base.`,
      link:"https://www.youtube.com/embed/C0BMx-qxsP4?si=anqo3IKRUCqCEO1U"
    });

    movies.set("jw2",{
      name:"jw2",
      path:"video/English/Directors/ChadStahelski/movies/jw2.jpg",
      desc:`John Wick: Chapter 2 (2017) is the sequel to the original film, directed by Chad Stahelski and starring Keanu Reeves as the titular character. The film picks up after the events of the first, with John Wick trying to live a peaceful life. However, he is forced back into the assassin underworld when an Italian crime lord named Santino D'Antonio (Riccardo Scamarcio) calls in a blood oath, demanding John kill his sister to claim her seat at the High Table, a council of powerful crime lords. Reluctantly, Wick accepts the mission but soon finds himself betrayed, leading to a relentless pursuit by various assassins. The film is acclaimed for its intense action choreography, world-building, and expansion of the series' mythology, solidifying John Wick as a modern action icon.`,
      link:"https://www.youtube.com/embed/ChpLV9AMqm4?si=Qxod1nOEVS8yidL6"
    });

    movies.set("jw3",{
      name:"jw3",
      path:"video/English/Directors/ChadStahelski/movies/jw3.jpg",
      desc:`John Wick: Chapter 3 – Parabellum (2019) continues the story of the titular character, played by Keanu Reeves. Directed by Chad Stahelski, the film begins immediately after the events of the second installment, with John declared "excommunicado" and a $14 million bounty placed on his head for breaking the rules of the assassin underworld. As he fights to survive against relentless attackers, Wick seeks help from allies, including Sofia (Halle Berry), a former associate with her own ties to the High Table. The film is noted for its breathtaking action sequences, creative combat choreography, and expansion of the series' intricate lore. With its stylish visuals and relentless pace, Chapter 3 further cements John Wick as a legendary figure in modern action cinema.`,
      link:"https://www.youtube.com/embed/M7XM597XO94?si=jFmtLXvkM5M0vy_J"
    });

    movies.set("jw4",{
      name:"jw4",
      path:"video/English/Directors/ChadStahelski/movies/jw4.jpg",
      desc:`John Wick: Chapter 4 (2023) continues the saga of the titular character, portrayed by Keanu Reeves. Directed by Chad Stahelski, the film sees John seeking vengeance against the High Table after surviving the events of the previous installment. As he fights to gain his freedom, he uncovers new allies and adversaries around the world, including a powerful new enemy played by Bill Skarsgård. The film is known for its elaborate action sequences, stunning cinematography, and an expansive narrative that explores the depths of loyalty and betrayal within the assassin underworld. With high stakes and intense battles, Chapter 4 solidifies John Wick’s legacy as an iconic action hero, delivering thrilling entertainment and further enriching the franchise's lore.`,
      link:"https://www.youtube.com/embed/qEVUtrk8_B4?si=rJDqj38qrdzV7JLF"
    });
















    movies.set("DarkKnight",{
      name:"DarkKnight",
      path:"video/English/Directors/ChristopherNolan/movies/DarkKnight.webp",
      desc:`The Dark Knight (2008) is a superhero film directed by Christopher Nolan, the second installment in his Batman trilogy. Starring Christian Bale as Bruce Wayne/Batman, the film features Heath Ledger in an iconic performance as the Joker, a chaotic villain intent on plunging Gotham City into anarchy. As Batman teams up with Lieutenant Jim Gordon (Gary Oldman) and District Attorney Harvey Dent (Aaron Eckhart) to combat rising crime, they face the Joker’s manipulative and violent tactics. The film is celebrated for its complex narrative, intense action sequences, and profound themes exploring morality, justice, and the nature of heroism. Ledger's performance earned him a posthumous Academy Award for Best Supporting Actor, and The Dark Knight is widely regarded as one of the greatest superhero films ever made, significantly influencing the genre.`,
      link:"https://www.youtube.com/embed/EXeTwQWrcwY?si=0dzElxYdcIvhtlXQ"
    });

    movies.set("Interstellar",{
      name:"Interstellar",
      path:"video/English/Directors/ChristopherNolan/movies/Interstellar.jpg",
      desc:`Interstellar (2014) is a science fiction film directed by Christopher Nolan, exploring themes of love, sacrifice, and the survival of humanity. The story follows former NASA pilot Cooper (Matthew McConaughey), who joins a team of explorers on a mission through a wormhole near Saturn in search of a new habitable planet, as Earth faces ecological collapse. The film intricately weaves complex scientific concepts, such as black holes and time dilation, into its narrative. With stunning visuals, a powerful score by Hans Zimmer, and strong performances from its cast, including Anne Hathaway and Jessica Chastain, Interstellar delves into the emotional and philosophical implications of space exploration. It received critical acclaim for its ambitious storytelling and has become a significant entry in contemporary sci-fi cinema.`,
      link:"https://www.youtube.com/embed/zSWdZVtXT7E?si=lmcY5m16GgeWZeNl"
    });

    movies.set("OppenHeimer",{
      name:"OppenHeimer",
      path:"video/English/Directors/ChristopherNolan/movies/OppenHeimer.webp",
      desc:`Oppenheimer (2023) is a biographical drama directed by Christopher Nolan, centered on J. Robert Oppenheimer, the theoretical physicist known as the "father of the atomic bomb." The film stars Cillian Murphy as Oppenheimer and explores his pivotal role in the Manhattan Project during World War II, alongside the moral dilemmas and personal conflicts he faced in creating a weapon of mass destruction. The narrative delves into themes of scientific responsibility, ambition, and the profound consequences of technological advancement. With a strong supporting cast, including Emily Blunt, Matt Damon, and Robert Downey Jr., Oppenheimer is noted for its compelling storytelling, striking cinematography, and thought-provoking exploration of history and ethics. The film has garnered critical acclaim and is regarded as one of Nolan's most ambitious works.`,
      link:"https://www.youtube.com/embed/uYPbbksJxIg?si=ecosISOH0WEurZCC"
    });

    movies.set("Tenet",{
      name:"Tenet",
      path:"video/English/Directors/ChristopherNolan/movies/Tenet.jpg",
      desc:`Tenet (2020) is a science fiction action-thriller directed by Christopher Nolan, known for its complex narrative structure and exploration of time manipulation. The film stars John David Washington as the Protagonist, a secret agent armed with a single word, "Tenet," and tasked with preventing a global catastrophe involving inverted time—where objects and people move backward through time. As he teams up with Neil (Robert Pattinson) and faces the enigmatic antagonist Andrei Sator (Kenneth Branagh), the plot unfolds through a series of intricate and mind-bending sequences. The film is praised for its ambitious concept, stunning visuals, and innovative action sequences, though its complexity has led to mixed reviews regarding its accessibility. Tenet challenges viewers to reconsider the nature of time and reality, characteristic of Nolan's distinctive filmmaking style.`,
      link:"https://www.youtube.com/embed/L3pk_TBkihU?si=e9z66VpJEX5IcHo6"
    });















    movies.set("Aliens",{
      name:"Aliens",
      path:"video/English/Directors/JamesCameron/movies/Aliens.jpg",
      desc:`Aliens (1986) is a sci-fi horror film directed by James Cameron, serving as a sequel to Ridley Scott's Alien (1979). The film follows Ellen Ripley, played by Sigourney Weaver, who is rescued after drifting in space for decades. Once informed that a colony has been established on the alien-infested planet LV-426, Ripley is persuaded to return with a group of colonial marines to confront the terrifying creatures. The film combines intense action with suspense, featuring memorable characters and groundbreaking special effects. Weaver's performance earned her an Academy Award nomination, and Aliens is widely regarded as one of the greatest sequels in film history, celebrated for its thrilling storytelling, strong female lead, and influential impact on the sci-fi genre.`,
      link:"https://www.youtube.com/embed/x0XDEhP4MQs?si=hkmw6LGqwMcEbAUY"
    });

    movies.set("Avatar",{
      name:"Avatar",
      path:"video/English/Directors/JamesCameron/movies/Avatar.jpg",
      desc:`Avatar (2009) is a groundbreaking science fiction film directed by James Cameron. Set in the mid-22nd century on the lush, alien world of Pandora, the film follows Jake Sully (Sam Worthington), a paraplegic former Marine who is selected to participate in the Avatar Program, allowing him to control a genetically engineered Na'vi body. As Jake integrates into the Na'vi culture, he becomes torn between his loyalty to the human military seeking to exploit Pandora's resources and his growing connection to the indigenous Na'vi people, particularly Neytiri (Zoe Saldana). Known for its stunning visual effects and innovative use of 3D technology, Avatar was a critical and commercial success, becoming the highest-grossing film of all time for nearly a decade. The film explores themes of environmentalism, colonialism, and the importance of interconnectedness, making a lasting impact on both the film industry and popular culture.`,
      link:"https://www.youtube.com/embed/d9MyW72ELq0?si=FMwugRti3Tqgxl4U"
    });

    movies.set("Terminator",{
      name:"Terminator",
      path:"video/English/Directors/JamesCameron/movies/Terminator.jpg",
      desc:`The Terminator (1984) is a science fiction film directed by James Cameron, starring Arnold Schwarzenegger as the iconic cyborg assassin sent back in time to kill Sarah Connor (Linda Hamilton), whose future son will lead the resistance against machines in a post-apocalyptic world. The film combines elements of action, horror, and technology, featuring groundbreaking special effects and a compelling narrative about fate, survival, and the dangers of artificial intelligence. Kyle Reese (Michael Biehn), a soldier sent from the future, is tasked with protecting Sarah, leading to intense confrontations between human and machine. The Terminator became a cultural phenomenon, spawning multiple sequels, spin-offs, and a dedicated fanbase, establishing itself as one of the most influential sci-fi franchises in cinematic history.`,
      link:"https://www.youtube.com/embed/oxy8udgWRmo?si=z9PkxTfAXhWmODLE"
    });

    movies.set("Titanic",{
      name:"Titanic",
      path:"video/English/Directors/JamesCameron/movies/Titanic.jpg",
      desc:`Titanic (1997) is an epic romance and disaster film directed by James Cameron, centered on the ill-fated maiden voyage of the RMS Titanic. The story follows the love affair between Jack Dawson (Leonardo DiCaprio), a penniless artist, and Rose DeWitt Bukater (Kate Winslet), a wealthy young woman engaged to a controlling fiancé. Set against the backdrop of the ship's tragic sinking, the film explores themes of love, class struggle, and survival. With stunning visuals, an iconic score featuring Celine Dion's "My Heart Will Go On," and a blend of historical and fictional elements, Titanic became a massive box office success. It won 11 Academy Awards, including Best Picture and Best Director, and is remembered as one of the most beloved films in cinematic history.`,
      link:"https://www.youtube.com/embed/kVrqfYjkTdQ?si=Dt7zJDGSGXoGs7ZG"
    });















    movies.set("Aquaman1",{
      name:"Aquaman1",
      path:"video/English/Directors/JamesWan/movies/Aquaman1.webp",
      desc:`Aquaman (2018) is a superhero film directed by James Wan, based on the DC Comics character of the same name. Starring Jason Momoa as Arthur Curry, the film explores his journey from a half-human, half-Atlantean outcast to the rightful ruler of Atlantis. After discovering his heritage and the existence of his mother, Atlanna (Nicole Kidman), and his estranged half-brother, Orm (Patrick Wilson), who seeks to unite the underwater kingdoms against the surface world, Arthur embarks on a quest to claim the throne. The film is known for its vibrant visuals, epic underwater battles, and a blend of action, humor, and adventure. It received positive reviews for its world-building and Momoa's charismatic performance, making it a significant entry in the DC Extended Universe.`,
      link:"https://www.youtube.com/embed/WDkg3h8PCVU?si=UtJ2zpNKpJlOwiFx"
    });

    movies.set("Aquaman2",{
      name:"Aquaman2",
      path:"video/English/Directors/JamesWan/movies/Aquaman2.jpg",
      desc:`Aquaman and the Lost Kingdom (2023) is the sequel to Aquaman, directed by James Wan. In this film, Arthur Curry (Jason Momoa) continues to navigate his dual identity as both the king of Atlantis and a protector of the surface world. As new threats emerge, including the return of old enemies and the discovery of a lost kingdom, Aquaman must forge alliances and confront his past to safeguard both realms. The film expands on the vibrant underwater world established in the first installment, featuring stunning visuals, epic battles, and character development. While exploring themes of responsibility and legacy, it aims to further enhance the mythology of the Aquaman character within the DC Extended Universe.`,
      link:"https://www.youtube.com/embed/UGc5Tzz19UY?si=tRUF_6dKSChrEN_Y"
    });

    movies.set("Conjuring2",{
      name:"Conjuring2",
      path:"video/English/Directors/JamesWan/movies/Conjuring2.jpg",
      desc:`The Conjuring 2 (2016) is a supernatural horror film directed by James Wan, serving as a sequel to The Conjuring (2013). Based on real-life paranormal investigators Ed and Lorraine Warren, portrayed by Patrick Wilson and Vera Farmiga, the film follows the couple as they travel to London to assist the Hodgson family, who are experiencing disturbing poltergeist activity in their home. The story is set against the backdrop of the infamous Enfield Poltergeist case. As the Warrens confront a malevolent spirit, they face personal challenges, including Lorraine's haunting visions of their past encounters. The film is praised for its chilling atmosphere, strong performances, and effective jump scares, further solidifying The Conjuring franchise's reputation for quality horror storytelling.`,
      link:"https://www.youtube.com/embed/VFsmuRPClr4?si=BRMpqTu-vEcAPIRG"
    });

    movies.set("FastandFurious7",{
      name:"FastandFurious7",
      path:"video/English/Directors/JamesWan/movies/FastandFurious7.jpg",
      desc:`Furious 7 (2015), also known as Fast & Furious 7, is the seventh installment in the Fast & Furious franchise, directed by James Wan. The film follows Dominic Toretto (Vin Diesel) and his crew as they face a new threat from Deckard Shaw (Jason Statham), a vengeful assassin seeking revenge for his brother's defeat. The story blends high-octane action, family dynamics, and themes of loyalty as the crew embarks on a global mission that includes intense car chases and daring heists. The film is notable for its emotional tribute to the late Paul Walker, who played Brian O'Conner, with the story acknowledging his character's journey. Featuring an ensemble cast and spectacular action sequences, Furious 7 became a box office success and is celebrated for its thrilling entertainment and heartfelt moments.`,
      link:"https://www.youtube.com/embed/yISKeT6sDOg?si=q7wg3v0P8futg-2W"
    });












    movies.set("Carrie",{
      name:"Carrie",
      path:"video/English/Directors/Stephen/movies/Carrie.jpg",
      desc:`Carrie (1976) is a horror film directed by Brian De Palma, based on Stephen King's debut novel. The story follows Carrie White (Sissy Spacek), a shy high school girl with telekinetic powers who faces bullying from her peers and an oppressive mother (Piper Laurie). After a cruel prank at prom, Carrie unleashes her powers in a devastating display of rage, leading to chaos and destruction. The film explores themes of isolation, revenge, and the consequences of cruelty. Spacek's haunting performance, along with the film's iconic prom scene, has made Carrie a classic in the horror genre. Its impact continues to resonate, leading to remakes and adaptations, while remaining a poignant commentary on the struggles of adolescence and the darkness that can emerge from trauma.`,
      link:"https://www.youtube.com/embed/qSn7JyijA8k?si=lr-MoEFfQ1UGIbcV"
    });

    movies.set("IndianaJones",{
      name:"IndianaJones",
      path:"video/English/Directors/Stephen/movies/IndianaJones.jpg",
      desc:`Indiana Jones is a character created by George Lucas and Steven Spielberg, first appearing in the film Raiders of the Lost Ark (1981). Played by Harrison Ford, Indiana Jones is a charismatic archaeologist and adventurer known for his iconic fedora, leather jacket, and whip. The franchise follows Jones as he embarks on globe-trotting quests to find ancient artifacts, often facing off against villains and supernatural forces. The original trilogy—comprising Raiders of the Lost Ark, Indiana Jones and the Temple of Doom (1984), and Indiana Jones and the Last Crusade (1989)—is celebrated for its thrilling action sequences, clever humor, and homage to classic adventure serials. A fourth film, Indiana Jones and the Kingdom of the Crystal Skull (2008), continued the legacy, with a fifth installment announced. The series has become a cultural phenomenon, influencing countless films and establishing Indiana Jones as an enduring icon of adventure cinema.`,
      link:"https://www.youtube.com/embed/eQfMbSe7F2g?si=mtgpRIwzg7WBogzp"
    });

    movies.set("JurassicPark",{
      name:"JurassicPark",
      path:"video/English/Directors/Stephen/movies/JurassicPark.jpg",
      desc:`Jurassic Park (1993) is a science fiction adventure film directed by Steven Spielberg, based on Michael Crichton's novel of the same name. The story follows a wealthy entrepreneur, John Hammond (Richard Attenborough), who creates a theme park on a remote island featuring genetically engineered dinosaurs. When a group of experts, including paleontologist Dr. Alan Grant (Sam Neill) and mathematician Ian Malcolm (Jeff Goldblum), is invited to tour the park, things go awry when the dinosaurs escape due to a malfunction in the security systems. The film is renowned for its groundbreaking visual effects, which brought dinosaurs to life in a realistic way, and its thrilling blend of action, suspense, and ethical questions about genetic engineering. Jurassic Park became a massive box office success and launched a franchise that includes sequels, animated series, and various merchandise, solidifying its place as a landmark in cinema history.`,
      link:"https://www.youtube.com/embed/lc0UehYemQA?si=LljpIL4PjZ4WG7Cb"
    });

    movies.set("ShawshankRedemption",{
      name:"ShawshankRedemption",
      path:"video/English/Directors/Stephen/movies/ShawshankRedemption.jpg",
      desc:`The Shawshank Redemption (1994) is a drama film directed by Frank Darabont, based on Stephen King's novella Rita Hayworth and Shawshank Redemption. The story follows Andy Dufresne (Tim Robbins), a banker wrongfully convicted of murdering his wife and her lover, who is sentenced to life in Shawshank State Penitentiary. There, he befriends fellow inmate Ellis "Red" Redding (Morgan Freeman) and navigates the harsh realities of prison life. Through his resilience and ingenuity, Andy transforms the prison from within, ultimately seeking redemption and freedom. The film explores themes of hope, friendship, and the human spirit's endurance in the face of adversity. Though initially a modest box office success, The Shawshank Redemption has since gained a cult following and is often regarded as one of the greatest films of all time, celebrated for its powerful storytelling and memorable performances.`,
      link:"https://www.youtube.com/embed/PLl99DlL6b4?si=7DH__EvQkI08ixUm"
    });










    movies.set("DeadpoolandWolverine",{
      name:"DeadpoolandWolverine",
      path:"video/English/New Release/DeadpoolandWolverine.jpg",
      desc:`Deadpool 3 is set to feature both Deadpool, played by Ryan Reynolds, and Wolverine, reprised by Hugh Jackman. This film marks Deadpool's first entry into the Marvel Cinematic Universe (MCU) and promises to blend the irreverent humor and meta-commentary characteristic of the Deadpool franchise with Wolverine's iconic, gruff demeanor. The dynamic between the two characters is expected to be central to the film, exploring their unique personalities and comedic interactions. Given the previous films' success, anticipation is high for this new adventure, which aims to deliver a mix of action, humor, and emotional depth while further expanding the Marvel universe.`,
      link:"https://www.youtube.com/embed/73_1biulkYk?si=FJYdlSG0vRc9s8BH"
    });
















    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });














    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });











    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });












    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });











    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });

    movies.set("Seve",{
      name:"Seven",
      path:"video/English/Actors/BradPitt/movies/Seven.jpg",
      desc:"",
      link:""
    });


    console.log(movies.get(name).path);
    setCurrentMovie(movies.get(name));
  },[name])

  return (
    <>
    <Header />
    <div className="video-totalbox">
      <div className='video-person-page'>
        <div  className='movie-img'>
            <DynamicImageDisplay name={currentMovie.name} path={currentMovie.path} />
        </div>

        <div className='total-desc-yt'>
              <div className='movie-desc'>
                   <p>{currentMovie.desc.length>770?currentMovie.desc.substring(0,770)+".....":currentMovie.desc}</p>
              </div>

              <div className='movie-yt'>
                  <iframe width="900" height="375" src={currentMovie.link} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Video