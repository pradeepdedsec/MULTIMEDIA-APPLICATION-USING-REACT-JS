import React from 'react'
import "../Styles/dynamicImageBox.css";
import DynamicImageClick from './DynamicImageClick'

const DynamicImageBox = ({list,goToPage}) => {
    console.log("dynamic"+list);
  return (
    <>
        <div className='whole-music-box'>
            {
                list.map((e,i)=>(
                    <>
                        <div className='total-scroll-box'>
                            <h1 className='scroll-box-head'>{e.Genre}</h1>
                            <div className='scroll-imgbox'>
                            {
                                e.photos.map((e,i)=>(
                                    <DynamicImageClick name={e.name} path={e.path} click={goToPage} />
                                ))
                            }
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    </>
  )
}

export default DynamicImageBox