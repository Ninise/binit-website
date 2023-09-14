import React from 'react';

import './store_button.css';

const StoreButton = ({ image, storeTextImage }) => {
  return (
    <div className='store__button_container'>
      <img
        src={image}
        alt='store img'
        className='home_image__logo'
      />
      <img
        src={storeTextImage}
        alt='store text img'
        className='home_image__text'
      />
    </div>
  );
};

export default StoreButton;
