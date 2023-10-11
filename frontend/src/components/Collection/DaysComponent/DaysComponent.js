import React from 'react'
import './DaysComponent.css'
import { MdVerified } from "react-icons/md";
import images from '../../../img';

const DaysComponent = () => {
  return (
    <div className='daysComponent'>
      <div className='daysComponent_box'>
        <div className='daysComponent_box_img'>
          <img src={images.creatorbackground1}
            className='daysComponent_box_img_img'
            width={430}
            height={300}
            objectFit='covers'/>
        </div>
        <div className='daysComponent_box_profile'>
          <img
            src={images.creatorbackground2}
            width={150}
            height={100}
            className='daysComponent_box_img_1'
            objectFit= 'covers'
          />
          <img
            src={images.creatorbackground3}
            width={150}
            height={100}
            className='daysComponent_box_img_2'
            objectFit= 'covers'
          />
          <img
            src={images.creatorbackground4}
            width={150}
            height={100}
            className='daysComponent_box_img_3'
            objectFit= 'covers'
          />
        </div>
        <div className='daysComponent_box_title'>
          <h2>Amazing Collection</h2>
          <div className='daysComponent_box_title_info'>
            <div className='daysComponent_box_title_info_profile'>
              <img src={images.user1} width={30} height={30}
              objectFit='covers' className='daysComponent_box_title_info_profile_img'/>
              <p>Creator
              <span>Mihir Agrawal<small><MdVerified/></small></span>
              </p>
            </div>
            <div className='daysComponent_box_title_info_profile'>
              <small>1.233 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysComponent