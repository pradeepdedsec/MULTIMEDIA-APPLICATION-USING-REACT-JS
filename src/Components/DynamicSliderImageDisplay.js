
const DynamicSliderImageDisplay = ({name,path}) => {
  
  return (
    <>
    <div className='slider-img-crop'>
        <img src={require(`../media/images/${path}`)} alt={name} />
    </div> 
    </>
  )
}

export default DynamicSliderImageDisplay