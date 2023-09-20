import React from 'react';

import './privacy_item.css';

const PrivacyItem = ({ title, subtitle }) => {
  return (
    <div className='privacy_item_container'>
      <h2 className='privacy_item_title'>{title}</h2>
      <p className='privacy_item_subtitle'>{subtitle}</p>
    </div>
  );
};

export default PrivacyItem;
