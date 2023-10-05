import React, { useState } from 'react'
import './navbar.css';
import Discover from './discover/discover';
import Helpcenter from './HelpCenter/helpcenter';
import Notification from './Notification/notification';
import Profile from './Profile/profile';
import Sidebar from './Sidebar/sidebar';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { Button } from '../componentindex';
import images from '../../img';

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == 'Discover') {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false)
    } else {
      setNotification(false);
    }
  }

  const openProfile = () => {
    if(!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  }

  const openSideBar = () => {
    if(!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  }
  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_container_left'>
          <div className='logo'>
            <img src={images.logo} alt='NFT MArketplace' height='100px' width='100px' />
          </div>
          <div className='navbar_container_left_box_input'>
            <div className='navbar_container_left_box_input_box'>
            <input type='text' placeholder='Search NFT' />
            <BsSearch onClick={() => { }} className='search_icon' />
            </div>
          </div>
        </div>
        <div className='navbar_container_right'>
          {/* DISCOVER SECTION */}
          <div className='navbar_container_right_discover'>
            <p onClick={(e) => { openMenu(e) }}> Discover</p>
            {discover && (<div className='navbar_container_right_discover_box'>
              <Discover />
            </div>)}
          </div>
          {/* HELP SECTION */}
          <div className='navbar_container_right_help'>
            <p onClick={(e) => { openMenu(e) }}>Help Center</p>
            {help && (
              <div className='navbar_container_right_help_box'>
                <Helpcenter />
              </div>
            )}
          </div>
          {/* NOTIFICATION SECTION */}
          <div className='navbar_container_right_notify'>
            <MdNotifications className='notify' onClick={() => { openNotification() }} />
            {notification && <Notification />}
          </div>
          {/* BUTTON SECTION */}
          <div className='navbar_container_right_button'>
            <Button btnName="Create" handleClick={()=>{}}/>
          </div>
          {/* USER PROFILE */}
          <div className='navbar_container_right_profile_box'>
            <div className='navbar_container_right_profile'>
              <img
              src={images.user1}
              alt='Profile'
              width={40}
              height={40}
              onClick={() => openProfile()}
              className='navbar_container_right_profile'/>
              {profile && <Profile/>}
            </div>
          </div>
          {/* MENU BUTTON */}
          <div className='navbar_container_right_menuBtn'>
              <CgMenuRight
                className='menuIcon'
                onClick={()=>openSideBar()}/>
          </div>
        </div>
      </div>
      {
        openSideMenu && (
          <div className='sideBar'>
            <Sidebar setOpenSideMenu={setOpenSideMenu}/>
          </div>)
      }
    </div>
  )
}

export default Navbar;