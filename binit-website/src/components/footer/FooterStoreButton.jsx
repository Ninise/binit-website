import React from 'react';

import './footer_store_button.css';

const FooterStoreButton = ({ image, storeTextImage }) => {
  return (
    <div className='footer_store__button_container'>
      <img
        src={image}
        alt='store img'
        className='image__logo'
      />
      <img
        src={storeTextImage}
        alt='store text img'
        className='image__text'
      />
    </div>
  );
};

export default FooterStoreButton;
