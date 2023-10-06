import React from 'react'
import './service.css'
import images from '../../img';

const Service = () => {
  return (
    <div className='service'>
        <div className='service_box'>
            <div className='service_box_item'>
               <img src={images.service1} alt='service 1' height={100} width={100}/>
                <p className='service_box_item_step'>
                    <span>Step 1</span>
                </p>
                <h3>
                    Filter & Discover
                </h3>
                <p>
                   Connect with wallet, discover, buy NFTs, 
                   sell your NFTs and earn money 
                </p>
            </div>
            <div className='service_box_item'>
               <img src={images.service2} alt='service 2' height={100} width={100}/>
                <p className='service_box_item_step'>
                    <span>Step 2</span>
                </p>
                <h3>
                    Filter & Discover
                </h3>
                <p>
                   Connect with wallet, discover, buy NFTs, 
                   sell your NFTs and earn money 
                </p>
            </div>
            <div className='service_box_item'>
               <img src={images.service3} alt='service 3' height={100} width={100}/>
                <p className='service_box_item_step'>
                    <span>Step 3</span>
                </p>
                <h3>
                    Connect Wallet
                </h3>
                <p>
                   Connect with wallet, discover, buy NFTs, 
                   sell your NFTs and earn money 
                </p>
            </div>
            <div className='service_box_item'>
               <img src={images.service4} alt='service 1' height={100} width={100}/>
                <p className='service_box_item_step'>
                    <span>Step 4</span>
                </p>
                <h3>
                    Start Trading
                </h3>
                <p>
                   Connect with wallet, discover, buy NFTs, 
                   sell your NFTs and earn money 
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Service