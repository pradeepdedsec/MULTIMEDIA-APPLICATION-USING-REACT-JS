import React from 'react'

const DynamicImageDisplay = ({name,path}) => {
  return (
    <>
    <div className='img-crop'>
        <img src={require(`../media/images/${path}`)} alt={name} />
    </div> 
    </>
  )
}

export default DynamicImageDisplay