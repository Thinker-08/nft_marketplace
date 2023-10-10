import './Filter.css';
import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true)
    const [music, setMusic] = useState(true);

    const openFilter = () => {
        setFilter(!filter);
    }

    const openImage = () => {
        setImage(!image);
    }

    const openVideo = () => {
        setVideo(!video);
    }

    const openMusic = () => {
        setMusic(!music);
    }
    return (
    <div className='filter'>
        <div className='filter_box'>
            <div className='filter_box_left'>
                <button onClick={()=>{}}>NFTs</button>
                <button onClick={()=>{}}>Arts</button>
                <button onClick={()=>{}}>Musics</button>
                <button onClick={()=>{}}>Sports</button>
                <button onClick={()=>{}}>Photography</button>
            </div>
            <div className='filter_box_right'>
                <div className='filter_box_right_box' onClick={()=>openFilter()}>
                    <FaFilter/>
                    <span>Filter</span>{filter?<FaAngleDown/>:<FaAngleUp/>}
                </div>
            </div>
        </div>
        {
            filter && (
            <div className='filter_box_items'>
                <div className='filter_box_items_box'>
                    <div className='filter_box_items_box_item'>
                        <FaWallet/><span>0.01 ETH - 10 ETH</span>
                        <AiFillCloseCircle/>
                    </div>
                </div>
                <div className='filter_box_items_box'>
                    <div className='filter_box_items_box_item_trans'
                        onClick={()=>openImage()}>
                    <FaImages/><small>Images</small>
                    {image ? <AiFillCloseCircle/>:<TiTick/>}
                    </div>
                </div>
                <div className='filter_box_items_box'>
                    <div className='filter_box_items_box_item_trans'
                        onClick={()=>openVideo()}>
                        <FaVideo/><span>Videos</span>
                        {video ? <AiFillCloseCircle/>:<TiTick/>}
                    </div>
                </div>
                <div className='filter_box_items_box'>
                    <div className='filter_box_items_box_item_trans'
                        onClick={()=>openMusic()}>
                            <FaMusic/> <small>Musics</small>
                            {music? <AiFillCloseCircle/> : <TiTick/>}
                    </div>
                </div>
                <div className='filter_box_items_box'>
                    <div className='filter_box_items_box_item_trans'>
                            <FaUserAlt/> <small>Verified</small>
                            <MdVerified/>
                    </div>
                </div>
            </div>
        )
        }
    </div>
  )
}

export default Filter