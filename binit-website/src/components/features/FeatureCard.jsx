import React from 'react';

import './feature_card.css';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className='feature__card_container'>
      <img
        src={icon}
        alt='card icon'
        className='card__icon'
      />
      <h4 className='feature__title_card'>{title}</h4>
      <p className='feature__description_card'>{text}</p>
    </div>
  );
};

export default FeatureCard;
