import React from 'react';
import './home.css';

import DiagonalImages from './DiagonalImages';
import StoreButton from './StoreButton';

import appleLogo from '../../assets/apple_btn_logo.svg';
import appleText from '../../assets/apple_btn_text.png';

import googleLogo from '../../assets/google_btn_logo.svg';
import googleText from '../../assets/google_btn_text.png';

export const Home = () => {
  return (
    <section
      className='home'
      id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <DiagonalImages />

          <div className='home__data'>
            <h1 className='home__title'>
              Let's sort it out,<br></br>bin it without a doubt!
            </h1>

            <p className='home__description'>
              We prepared for you a search, engaging educational games, and{' '}
              <br></br>
              informative articles.
            </p>

            <p className='home__description'>
              Say goodbye to confusion and contribute to a cleaner, greener
              world by effortlessly sorting your garbage with our app!
            </p>

            <div className='home__store_buttons'>
              <StoreButton
                image={appleLogo}
                storeTextImage={appleText}
              />
              <StoreButton
                image={googleLogo}
                storeTextImage={googleText}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
