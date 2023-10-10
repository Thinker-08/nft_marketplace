import React from 'react';
import './category.css';
import images from '../../img';
import { BsCCircleFill } from 'react-icons/bs';
const Category = () => {
    const categoryArray = [1,2,3,4,5, 6];
  return (
    <div className='box_category'>
        <div className='category'>
        {categoryArray?.map((el, i)=>(
            <div key={i+1} className='category_box'>
                <img 
                    src={images.creatorbackground1}
                    className='category_box_img'
                    alt='category_image'
                    width={350}
                    height={150}
                    objectFit='cover'
                />
            <div className='category_box_title'>
                <span>
                    <BsCCircleFill/>
                </span>
                <div className='category_box_title_info'>
                    <h4>Entertainment</h4>
                    <small>1995 NFTs</small>
                </div>
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Category;