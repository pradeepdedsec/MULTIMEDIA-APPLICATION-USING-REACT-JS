import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Test2 from './Test2';

const MusicTest = () => {

    let {name}=useParams();
    const [person,setPerson]=useState("");

    useEffect(()=>{
        setPerson(name);
        console.log(name)
    },[name])

    //Surya (2).jpg

  return (
    <Test2 name={name} />
  )
}

export default MusicTest