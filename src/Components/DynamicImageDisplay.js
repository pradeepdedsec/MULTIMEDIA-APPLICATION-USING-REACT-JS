import React, { useEffect, useState } from 'react'

const DynamicImageDisplay = ({name,path}) => {
  const[loadpath,setLoadpath]=useState("Loading/Loading.gif")

  useEffect(()=>{
    setLoadpath(path)
  },[path])
  return (
    <>
    <div className='img-crop'>
        <img src={require(`../media/images/${loadpath}`)} alt={name} />
    </div> 
    </>
  )
}

export default DynamicImageDisplay