import React from 'react'

const DynamicImageClick = ({name,path,click}) => {
  return (
    <>
      <div className='img-crop'>
      <img className='dynamic-img' onClick={()=> click(name)} src={require(`../media/images/${path}`)} alt={name} />
      </div> 
    </>
  )
}

export default DynamicImageClick