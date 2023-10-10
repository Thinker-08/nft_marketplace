import React , { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import './NFTCard.css'
import images from '../../img'
const NFTCard = () => {
    const featureArray = [
     1,2,3,4,5,6,7,8,9   
    ];
    const [like, setLike] = useState(true);

    const likeNFT = () => {
        setLike(!like)
    }
  return (
    <div className='NFTCard'>
        {featureArray.map((el, i)=>(
          <div className='NFTCard_box' key={i+1}>
            <div className='NFTCard_box_img'>
                <img
                src={images.nft_image_2}
                width="auto"
                height="600px"
                className='NFTCard_box_img_img'/>
            </div>
            <div className='NFTCard_box_update'>
                <div className='NFTCard_box_update_left'>
                    <div className='NFTCard_box_update_left_like'
                        onClick={()=>likeNFT()}>
                            {like? <AiOutlineHeart/>:<AiFillHeart className='NFTCard_box_update_left_like_icon'/>}
                    {""}22
                    </div>
                </div>
                <div className='NFTCard_box_update_right'>
                    <div className='NFTCard_box_update_right_info'>
                        <small>Remaining Time</small>
                        <p>3h : 21m: 27s</p>
                    </div>
                </div>
            </div>
            <div className='NFTCard_box_update_details'>
                <div className='NFTCard_box_update_details_price'>
                    <div className='NFTCard_box_update_details_price_box'>
                        <h4>Clone #11239</h4>
                        <div className='NFTCard_box_update_details_price_box_box'>
                            <div className='NFTCard_box_update_details_price_box_bid'>
                                <small>Current Bid</small>
                                <p>1.000ETH</p>
                            </div>
                            <div className='NFTCard_box_update_details_price_box_stock'>
                                <small>61 in stock</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='NFTCard_box_update_details_category'>
                    <BsImages/>
                </div>
            </div>
          </div>  
        ))}
    </div>
  )
}

export default NFTCard