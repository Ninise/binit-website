import React, { useState } from 'react';

import './accordion.css';

import accordionOpen from '../../assets/ic_accordion_open.svg';
import accordionClosed from '../../assets/ic_accordion_closed.svg';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className='accordion__item'
      onClick={() => setIsActive(!isActive)}>
      <div className='accordion__title'>
        <div className='accordion__title_text'>{title}</div>
        <div>
          {
            <img
              src={isActive ? accordionOpen : accordionClosed}
              alt='accordion chevron'
            />
          }
        </div>
      </div>
      {isActive && (
        <div className='accordion__content'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
