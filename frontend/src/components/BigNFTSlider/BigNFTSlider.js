import React, { useState, useEffect, useCallback } from 'react'
import './BigNFTSlider.css'
import images from '../../img';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';
import Button from '../Button/button';

const BigNFTSlider = () => {
    const [idNumber, setidNumber] = useState(0);
    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Mihir Agrawal",
            collection: "Gym",
            price: "000987ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                day: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        }, {
            title: "Hello NFT 2",
            id: 2,
            name: "Test Agrawal",
            collection: "Gym",
            price: "000981237ETH",
            like: 187,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                day: 17,
                hours: 5,
                minutes: 9,
                seconds: 23
            }
        }, {
            title: "Hello NFT 3",
            id: 3,
            name: "Tester Agrawal",
            collection: "Gym",
            price: "0002187ETH",
            like: 223,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                day: 12,
                hours: 7,
                minutes: 12,
                seconds: 43
            }
        }
    ]
    const inc = useCallback(()=>{
        if(idNumber + 1<sliderData.length) {
            setidNumber(idNumber+1);
        }
    }, [idNumber, sliderData.length])
    const dec = useCallback(()=>{
        if(idNumber > 0) {
            setidNumber(idNumber-1);
        }
    }, [idNumber])

    return (
        <div className='bigNFTSlider'>
            <div className='bigNFTSlider_box'>
                <div className='bigNFTSlider_box_left'>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className='bigNFTSlider_box_left_creator'>
                        <div className='bigNFTSlider_box_left_creator_profile'>
                            <img src={sliderData[idNumber].image} alt='user profile'
                                height={50} width={50}
                                className='bigNFTSlider_box_left_creator_profile_img'>
                            </img>
                            <div className='bigNFTSlider_box_left_creator_profile_info'>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}{" "}
                            <span>
                                <MdVerified/>    
                            </span></h4>
                            </div>    
                        </div>
                        <div className='bigNFTSlider_box_left_creator_collection'>
                            <AiFillFire className='bigNFTSlider_box_left_creator_collection_icon'/>
                            <div className='bigNFTSlider_box_left_creator_collection_info'>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bigNFTSlider_box_left_bidding'>
                        <div className='bigNFTSlider_box_left_bidding_box'>
                            <small>Current Bid</small>
                            <p>
                                {sliderData[idNumber].price}
                                <span>
                                    $12,134,221
                                </span>
                            </p>
                        </div>
                        <p className='bigNFTSlider_box_left_bidding_box_auction'>
                            <MdTimer className='bigNFTSlider_box_left_bidding_box_icon'/>
                            <span>Auction ending in</span>
                        </p>
                        <div className='bigNFTSlider_box_left_bidding_box_timer'>
                            <div className='bigNFTSlider_box_left_bidding_box_timer_item'>
                                <p>{sliderData[idNumber].time.day}</p>
                                <span>days</span>
                            </div>
                            <div className='bigNFTSlider_box_left_bidding_box_timer_item'>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>hrs</span>
                            </div>
                            <div className='bigNFTSlider_box_left_bidding_box_timer_item'>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>mins</span>
                            </div>
                            <div className='bigNFTSlider_box_left_bidding_box_timer_item'>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>secs</span>
                            </div>
                        </div>
                        <div className='bigNFTSlider_box_left_button'>
                            <Button btnName='Place' handleClick={()=>{}}/>
                            <Button btnName='View' handleClick={()=>{}}/>
                        </div>
                    </div>
                    <div className='bigNFTSlider_box_left_sliderBtn'>
                        <TbArrowBigLeftLine className='bigNFTSlider_box_left_sliderBtn_icon'
                        onClick={()=>dec()}/>
                        <TbArrowBigRightLine className='bigNFTSlider_box_left_sliderBtn_icon'
                        onClick={()=>inc()}/>
                    </div>
                </div>
                <div className='bigNFTSlider_box_right'>
                    <div className='bigNFTSlider_box_right_box'>
                        <img src={sliderData[idNumber].nftImage} alt='NFT Image' className='bigNFTSlider_box_right_box_img'
                        height={750} width={750}/>
                        <div className='bigNFTSlider_box_right_box_like'>
                            <AiFillHeart/>
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNFTSlider