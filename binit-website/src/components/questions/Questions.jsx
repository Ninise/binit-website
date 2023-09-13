import React, { useState } from 'react';
import './questions.css';

import Accordion from './Accordion';

export const Questions = () => {
  return (
    <section
      className='questions section'
      id='questions'>
      <div className='questions__container container grid'>
        <div className='questions__content grid'>
          <h3 className='questions__title'>Frequently Asked Questions</h3>

          <Accordion
            title='Is my personal information safe with Binit!?'
            content='Absolutely. We take user privacy and data security seriously. Binit! does not collect personal information, contact details, or emails from our users. The only permission we request is to send app push notifications, so you can stay informed about the latest updates.'
          />

          <Accordion
            title="Can I contribute to Binit!'s waste sorting database?"
            content='Yes, we would greatly appreciate any assistance in expanding our waste sorting database. If you have information or knowledge about waste management practices in your area that can help us improve our coverage, please reach out to us  email@gmail.com.'
          />

          <Accordion
            title='How often will Binit! be updated?'
            content='We are committed to continuously improving Binit! and providing regular monthly updates. We value user feedback and strive to incorporate new features and expand our database to cover more locations across Canada.'
          />

          <Accordion
            title='Can I collaborate with Binit! as a community organization or business?'
            content="Absolutely! We actively seek collaborations with communities, volunteering organizations, and businesses that share our passion for waste management and sustainability. If you're interested in collaborating, please get in touch with us through the app or our website."
          />

          <Accordion
            title='How can I provide feedback or report issues with the app?'
            content="We encourage you to provide feedback to help us improve Binit! You can send your feedback, and suggestions, or report any issues you encounter through the app's feedback section or by email@gmail.com."
          />

          <Accordion
            title='Is Binit! available outside of Canada?'
            content='Currently, Binit! focuses on waste sorting information specific to Canada. However, we are actively working on expanding our coverage to include data from other areas, if you have any idea how to help us please contact us at mail@email.com.'
          />
        </div>
      </div>
    </section>
  );
};
