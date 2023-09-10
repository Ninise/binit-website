import React from 'react';
import './how_it_works.css';

export const HowItWorks = () => {
  return (
    <section
      className='how_it_works section'
      id='how_it_works'>
      <div className='how_it_works__container container grid'>
        <div className='how_it_works__content grid'>
          <div className='how_it_works__text'>
            <h2 className='how_it_works__title'>
              Your small habit leads to big changes
            </h2>
            <p className='how_it_works__description'>
              Every action counts, and together we can make a positive impact on
              the planet! Join us on this journey for a cleaner, greener future.
            </p>
          </div>

          <iframe
            className='how_it_works__video'
            src='https://www.youtube.com/embed/FR0F2IuCGOQ?si=ZO3gjSbAFd5-0e1z&amp;controls=0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};
