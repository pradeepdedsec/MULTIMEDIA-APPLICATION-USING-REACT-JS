import React, { useEffect, useState } from 'react'

const DynamicImageClick = ({name,path,click}) => {
  const[loadpath,setLoadpath]=useState("Loading/Loading.gif")

  useEffect(()=>{
    setLoadpath(path)
  },[path])
  return (
    <>
      <div className='img-crop'>
      <img className='dynamic-img' onClick={()=> click(name)} src={require(`../media/images/${loadpath}`)} alt={name} />
      </div> 
    </>
  )
}

export default DynamicImageClick