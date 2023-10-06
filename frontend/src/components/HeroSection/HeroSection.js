import React from 'react'
import './HeroSection.css';
import { Button } from '../componentindex';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className='heroSection'>
        <div className='heroSection_box'>
            <div className='heroSection_box_left'>
                <h1>Discover, collect and sell NFTs 🖼️</h1>
                <p>
                    Discover the most outstanding NFTs in all topics of
                    life. Create your NFTs and sell them.
                </p>
                <Button btnName='Start Your Search'/>
            </div>
            <div className='heroSection_box_right'>
                <img src={images.hero} alt='Hero Section'
                height={600} width={600}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection