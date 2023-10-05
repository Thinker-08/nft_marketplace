import React from 'react'
import './notification.css'
import images from '../../../img';

const Notification = () => {
  return (
    <div className='notification'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className='notification_box_img'>
          <img src={images.user1} alt='profile_img' height={50} width={50}
          className='notification_box_img'/>
        </div>
        <div className='notification_box_info'>
          <h4>Test Name</h4>
          <p>Measure action your user ..</p>
          <small>3 minutes age</small>
        </div>
        <span className='notification_box_new'></span>
      </div>
    </div>
  )
}

export default Notification