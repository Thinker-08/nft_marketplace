import React from 'react'
import './footer.css'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
  } from 'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri';
import images from '../../img';
import {Discover, Helpcenter} from '../Navbar/index'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_box'>
        <div className='footer_box_social'>
          <img src={images.logo} alt='footer logo' height={100} width={100}/>
          <p>The world's first and largest digital marketplace for customers getting 
            collectibles and non-fungible tokens(NFTs). Buy, sell, resell all your
            exclusive digital items.
          </p>
          <div className='footer_social'>
            <a href='#'><TiSocialFacebook/></a>
            <a href='#'><TiSocialLinkedin/></a>
            <a href='#'><TiSocialTwitter/></a>
            <a href='#'><TiSocialYoutube/></a>
            <a href='#'><TiSocialInstagram/></a>
          </div>
        </div>
        <div className='footer_box_discover'>
          <h3>Discover</h3>
          <Discover/>
        </div>
        <div className='footer_box_help'>
          <h3>Help Center</h3>
          <Helpcenter/>
        </div>
        <div className='footer_subscribe'>
          <h3>Subscribe</h3>
        <div className='footer_subscribe_box'>
          <input type='email' placeholder='Enter your mail'/>
          <RiSendPlaneFill className='footer_subscribe_box_send'/>
        </div>
        <div className='footer_subscribe_box_info'>
          <p>
            Discover, collect and sell extraordinary NFTs Open Sea is the world'search
            first and largest NFT marketplace.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer