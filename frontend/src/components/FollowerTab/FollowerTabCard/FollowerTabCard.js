import React, { useState } from 'react'
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "../../../img";
import './FollowerTabCard.css';

const FollowerTabCard = ({ el, i }) => {
    const [following, setFollowing] = useState(false);
    const followMe = () => {
        setFollowing(!following);
    }
    return (
        <div className='FollowerTabCard'>
            <div className='FollowerTabCard_rank'>
                <p>#{i}<span>🏅</span></p>
            </div>
            <div className='FollowerTabCard_box'>
                <div className='FollowerTabCard_box_img'>
                    <img className='FollowerTabCard_box_img_img'
                        src={images.creatorbackground1}
                        alt='Profle background'
                        width={321}
                        height={300} />
                </div>
                <div className='FollowerTabCard_box_profile'>
                    <img
                        className='FollowerTabCard_box_profile_img'
                        width={100}
                        height={100}
                        src={images.user2} />
                </div>
                <div className='FollowerTabCard_box_info'>
                    <div className='FollowerTabCard_box_info_name'>
                        <h4>Giada Mann {" "}<span><MdVerified /></span></h4>
                        <p>13.243 ETH</p>
                    </div>
                    <div className="FollowerTabCard_box_info_following">
                        {following?(
                            <a onClick={()=>{followMe()}}>Follow{" "}{" "}
                                <span>
                                    <TiTick/>
                                </span>
                            </a>
                        ):<a onClick={()=>followMe()}>Following</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard