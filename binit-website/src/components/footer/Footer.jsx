import React from 'react';

import './footer.css';

import whaleScaleImage from '../../assets/footer_logo_whalescale.svg';
import binitImage from '../../assets/footer_app_logo.svg';

import appleLogo from '../../assets/footer_apple_logo.svg';
import googleLogo from '../../assets/footer_google_logo.svg';

import appleText from '../../assets/footer_apple_store.png';
import googleText from '../../assets/footer_google_play.png';

import FooterStoreButton from './FooterStoreButton';

export const Footer = () => {
  return (
    <section
      className='footer'
      id='footer'>
      <div className='footer_container'>
        <div className='footer_internal'>
          <div className='footer_buttons_row'>
            <div className='footer_store_butons'>
              <img
                src={binitImage}
                alt='app logo'
              />
              <div className='footer_store_buttons_row'>
                <FooterStoreButton
                  image={appleLogo}
                  storeTextImage={googleText}
                />
                <FooterStoreButton
                  image={googleLogo}
                  storeTextImage={appleText}
                />
              </div>
            </div>

            <div className='footer_privacy_terms_row'>
              <a
                className='footer_transparent_button'
                href='/privacy'>
                Privacy Policy
              </a>
              <a
                className='footer_transparent_button'
                href='/terms'>
                Terms & Conditions
              </a>
              <button className='footer_transparent_button'>Support Us</button>
            </div>
          </div>

          <div className='footer_copyright_row'>
            <div className='footer_line'></div>

            <p className='footer_copyright_text'>
              © Copyright 2023, All Rights Reserved
            </p>

            <img
              src={whaleScaleImage}
              alt='whale_scale Logo'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
