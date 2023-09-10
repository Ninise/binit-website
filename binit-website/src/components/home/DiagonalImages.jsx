import React from 'react';

import image1 from '../../assets/main_image_1.png';
import image2 from '../../assets/main_image_2.png';
import image3 from '../../assets/main_image_3.png';

import './diagonal_images.css';

const DiagonalImages = () => {
  return (
    <div className='diagonal-images'>
      <img
        src={image1}
        alt='Main screen 1'
        className='image'
      />
      <img
        src={image2}
        alt='Main screen 2'
        className='image image-2'
      />
      <img
        src={image3}
        alt='Main screen 3'
        className='image image-3'
      />
    </div>
  );
};

export default DiagonalImages;
