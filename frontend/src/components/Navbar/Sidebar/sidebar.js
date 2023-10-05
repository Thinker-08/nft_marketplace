import React, {useState} from 'react'
import './sidebar.css'
import images from '../../../img';
import {GrClose} from 'react-icons/gr';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp
    } from 'react-icons/ti';
import Button from '../../Button/button';

const Sidebar = ({setOpenSideMenu}) => {
    const [openDiscover, setopenDiscover] = useState(false);
    const [openHelp, setopenHelp] = useState(false);
    const discover = [
        {
          name:"Collection",
          link: 'collection'
        },{
          name:"Search",
          link: 'search'
        },{
          name:"Author Profile",
          link: 'author-profile '
        },{
          name:"NFT Details",
          link: 'NFT-details'
        },{
          name:"Account Setting",
          link: 'account-setting'
        },{
          name:"Connect Wallet",
          link: 'connect-wallet'
        },{
          name:"Blog",
          link: 'blog'
        },
      ];
    const helpcenter = [
        {
          name:'About',
          link: 'about'
        },{
          name:'Contact Us',
          link: 'contact-us'
        },{
          name:'Signup',
          link: 'signup'
        },{
          name:'Signin',
          link: 'Signin'
        },{
          name:'Subscription',
          link: 'Subscription'
        }
      ];
    const openDiscoverMenu = () => {
        if(!openDiscover) {
            setopenDiscover(true);
        } else {
            setopenDiscover(false);
        }
    };

    const openHelpMenu = () => {
        if(!openHelp) {
            setopenHelp(true);
        } else {
            setopenHelp(false);
        }
    };
    const closeSidebar = () => {
        setOpenSideMenu(false)
    }
  return (
    <div className='sideBar'>
        <GrClose className='sideBar_closeBtn' onClick={()=>closeSidebar()}/>
        <div className='sideBar_box'>
            <img src={images.logo} alt='logo' width={150} height={150}/>
            <p>Discover the most outstand articles on all topics of NFT & your
                own stories and share them
            </p>
            <div className='sideBar_social'>
                <a href='#' style={{textDecoration: "none", color: "inherit"}}>
                    <TiSocialFacebook/>
                </a>
                <a href='#' style={{textDecoration: "none", color: "inherit"}}>
                    <TiSocialLinkedin/>
                </a>
                <a href='#' style={{textDecoration: "none", color: "inherit"}}>
                    <TiSocialTwitter/>
                </a>
                <a href='#' style={{textDecoration: "none", color: "inherit"}}>
                    <TiSocialYoutube/>
                </a>
                <a href='#' style={{textDecoration: "none", color: "inherit"}}>
                    <TiSocialInstagram/>
                </a>
            </div>
        </div>
        <div className='sideBar_menu'>
            <div>
                <div className='sideBar_menu_box' onClick={()=>openDiscoverMenu()}>
                    <p>
                        Discover
                    </p>
                    <TiArrowSortedDown/>
                </div>
                {openDiscover && (
                        <div className='sideBar_discover'>
                            {discover.map((el, i)=>(
                                <p key={i+1}>
                                    <a href={{pathname: `${el.link}`}} style={{textDecoration: "none", color: "inherit"}}>{el.name}</a>
                                </p>
                            ))}
                        </div>
                    )}
            </div>
            <div>
               <div className='sideBar_menu_box' onClick={()=>openHelpMenu()}>
                <p> Help Center</p>
                <TiArrowSortedDown/>
                </div> 
                {openHelp && (
                    <div className='sideBar_discover'>
                        {helpcenter.map((el,i)=>(
                            <p key={i+1}>
                                <a href={{pathname: `${el.link}`}} style={{textDecoration: "none", color: "inherit"}}>{el.name}</a>
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className='sideBar_button'>
                <Button btnName="Create" handleClick={()=>{}}/>
                <Button btnName="Connect Wallet" handleClick={()=>{}}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar