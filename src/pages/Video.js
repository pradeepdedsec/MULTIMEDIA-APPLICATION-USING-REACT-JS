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

  let movies=new Map();

  

  useEffect(()=>{

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
  
    movies.set("Aega",{
      name:"Billa",
            path:"video/Tamil/Actors/Ajith/movies/Billa.webp",
      desc:"",
      link:""
    });
  
    movies.set("Aega",{
      name:"Billa",
            path:"video/Tamil/Actors/Ajith/movies/Billa.webp",
      desc:"",
      link:""
    });
  
    movies.set("Aega",{
      name:"Billa",
            path:"video/Tamil/Actors/Ajith/movies/Billa.webp",
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
                  <p>
                    {currentMovie.desc} 
                   </p>
              </div>

              <div className='movie-yt'>
                  <iframe width="900" height="320" src={currentMovie.link} 
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