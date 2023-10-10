import React from 'react'
import './title.css'
import images from '../../img';

const Title = ({heading, paragraph}) => {
  return (
    <div className='title'>
        <div className='title_box'>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Title