import React from 'react';
import './features.css';
import FeatureCard from './FeatureCard';

import SearchIcon from '../../assets/ic_card_search.svg';
import GameIcon from '../../assets/ic_card_game.svg';
import BookIcon from '../../assets/ic_card_book.svg';

export const Features = () => {
  return (
    <section
      className='features'
      id='features'>
      <div className='features__container'>
        <div className='features__conten'></div>

        <h2 className='features__title'>
          At BinIt!, we are passionate about promoting proper waste <br></br>{' '}
          disposal and environmental sustainability.
        </h2>

        <p className='features__description'>
          Our app is specifically designed to make sorting garbage a breeze
          <br></br>
          while educating users on the importance of responsible waste<br></br>
          management.
        </p>

        <div className='features__cards_container'>
          <FeatureCard
            icon={SearchIcon}
            title='Item Search'
            text='Say goodbye to uncertainty in sorting your garbage. It provides clear instructions for proper disposal of all items.'
          />

          <FeatureCard
            icon={GameIcon}
            title='Educational Games'
            text='Prepare for any sorting situation. Experience thought-provoking challenges and questions that go beyond the obvious.'
          />

          <FeatureCard
            icon={BookIcon}
            title='Articles and Tutorials'
            text='Dive deeper into recycling, composting, waste reduction, understand product packaging specifics and signs.'
          />
        </div>
      </div>
    </section>
  );
};
