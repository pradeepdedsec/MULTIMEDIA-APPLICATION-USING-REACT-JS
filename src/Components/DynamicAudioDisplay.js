import React from 'react'

const DynamicAudioDisplay = ({path}) => {
  return (
    <>
        <audio controls>
                  <source src={require(`../media/audio/${path}`)} type="audio/mp3" />
        </audio>
    </>
  )
}

export default DynamicAudioDisplay