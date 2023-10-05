import React from 'react'
import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import {TbDownloadOff, TbDownload} from 'react-icons/tb';

import './profile.css';
import images from '../../../img';
const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile_account'>
        <img
          src={images.user1}
          alt = 'user profile'
          width={50}
          height={50}
          className='profile_account_img'
          />
          <div className='profile_account_info'>
            <p>Test Name</p>
            <small>X012312879..</small>
          </div>
      </div>
      <div className='profile_menu'>
        <div className='profile_menu_one'>
          <div className='profile_menu_one_item'>
            <FaUserAlt/>
            <p>
              <a href={{pathname:'/myprofile'}} style={{textDecoration: "none", color: "inherit"}}>My Profile</a>
            </p>
          </div>
          <div className='profile_menu_one_item'>
            <FaRegImage/>
            <p>
              <a href={{pathname:'/my-items'}} style={{textDecoration: "none", color: "inherit"}}>My Items</a>
            </p>
          </div>
          <div className='profile_menu_one_item'>
            <FaUserEdit/>
            <p>
              <a href={{pathname:'/edit-profile'}} style={{textDecoration: "none", color: "inherit"}}>Edit Profile</a>
            </p>
          </div>
        </div>
        <div className='profile_menu_two'>
          <div className='profile_menu_one_item'>
            <MdHelpCenter/>
            <p>
              <a href={{pathname:'/help'}} style={{textDecoration: "none", color: "inherit"}}>
                Help
              </a>
            </p>
          </div>
          <div className='profile_menu_one_item'>
          <TbDownload/>
            <p>
              <a href={{pathname:'/disconnect'}} style={{textDecoration: "none", color: "inherit"}}>
                Disconnect
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile