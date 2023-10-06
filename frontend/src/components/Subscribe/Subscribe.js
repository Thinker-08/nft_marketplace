import React from 'react'
import './Subscribe.css'
import { RiSendPlaneFill } from "react-icons/ri";
import images from '../../img';

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='subscribe_box'>
            <div className='subscribe_box_left'>
                <h2>
                    Never miss a frop
                </h2>
                <p>
                    Subscribe to our super-exclusive drop list and be the first whenever
                    for new and upcoming drops
                </p>
                <div className='subscribe_box_left_box'>
                    <span>01</span>
                    <small>Get more discount</small>
                </div>
                <div className='subscribe_box_left_box'>
                    <span>02</span>
                    <small>Get premimum magazines</small>
                </div>
                <div className='subscribe_box_left_input'>
                    <input type='email' placeholder='Enter Your email'/>
                    <RiSendPlaneFill className='subscribe_left_input_icon'/>
                </div>
            </div>
            <div className='subscribe_box_right'>
               <img src={images.update} height={600} width={800}/> 
            </div>
        </div>
    </div>
  )
}

export default Subscribe