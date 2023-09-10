import React from 'react';
import './mission.css';

import image from '../../assets/about.jpg';

export const Mission = () => {
  return (
    <section
      className='mission section'
      id='mission'>
      <div className='mission__container container grid'>
        <div className='mission__content grid'>
          <img
            src={image}
            alt='about img'
            className='about__image'
          />

          <div className='about__data'>
            <h3 className='about__title'>About</h3>
            <p className='about__text'>
              We're excited to introduce the first version of the Binit! app. We
              prepared a search, engaging educational games, and informative
              articles for you.
            </p>
            <p className='about__subtitle'>OUR STORY</p>
            <p className='about__text'>
              When we came to Canada, we had to learn new rules for waste
              sorting since our home country only had landfills.
            </p>
            <p className='about__text'>
              It was an interesting journey of discovery, learning all the ins
              and outs of waste management rules. We even didn't know where to
              properly dispose of glass (no throwing it down the garbage chute,
              that's for sure!). It may sound a little funny, but hey, we had
              never experienced anything like this before!
            </p>
            <p className='about__subtitle'>WHY WE DO IT?</p>
            <p className='about__text'>
              Now we are driven by the idea that proper waste sorting not only
              helps keep our surroundings clean but also has a significant
              impact on the environment and climate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
