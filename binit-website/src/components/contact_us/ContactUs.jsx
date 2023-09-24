import React, { useState } from 'react';
import './contact_us.css';

import ContactData from './ContactData';
import ContactTextField from './ContactTextField';

export const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    alert(`${name} ${email} ${message}`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section
      className='contact_us'
      id='contact_us'>
      <div className='contact_us__container '>
        <div className='contact_us__content'>
          <div className='contact_us__data'>
            <h1 className='contact_us__title'>Contact Us</h1>
            <p className='contact_us__description'>
              Whether you have questions, suggestions, or would like to
              collaborate, we would love to hear from you.
            </p>
            <p className='contact_us__description'>
              Don't hesitate to get in touch let's make a difference!
            </p>

            <div className='contact_us__data_rows'>
              <div className='contact_us__data_row'>
                <ContactData
                  title='Email'
                  data='name@email.com'
                />
                <ContactData
                  title='LinkedIn'
                  data='name@email.com'
                />
                <ContactData
                  title=''
                  data=''
                />
              </div>

              <div className='contact_us__data_row'>
                <ContactData
                  title='Instagram'
                  data='@app_binit'
                />
                <ContactData
                  title='Facebook'
                  data='Binit! App'
                />
                <ContactData
                  title='TikTok'
                  data='@binit_app'
                />
              </div>

              <div>
                <p className='contact_us__made_in_cad'>
                  Made in Canada 🇨🇦 by WhaleScale
                </p>
              </div>
            </div>
          </div>

          <div className='contact_us__form'>
            <ContactTextField
              title='Your name'
              hint='What is your name?'
              type='name'
              isOneLine={true}
              value={name}
              onChange={handleNameChange}
            />

            <ContactTextField
              title='Email address'
              hint='example@binit.com'
              type='email'
              isOneLine={true}
              value={email}
              onChange={handleEmailChange}
            />

            <ContactTextField
              title='Message'
              hint='Write us your question'
              type='message'
              isOneLine={false}
              value={message}
              onChange={handleMessageChange}
            />

            <button
              className='contact_us__button'
              id='submit-button'
              onClick={handleClick}>
              Send a message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
