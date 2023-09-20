import React from 'react';
import './privacy.css';

import PrivacyItem from './PrivacyItem';

export const Privacy = () => {
  return (
    <section
      className='privacy section'
      id='privacy'>
      <div className='privacy__container container grid'>
        <div className='privacy__content grid'>
          <h1>Privacy policy</h1>

          <PrivacyItem
            title='1. Introduction'
            subtitle='Welcome to Binit!, a garbage sorting and educational app operated by WhaleScale company (\"we,\" \"us,\" or \"our\"). This Privacy Policy outlines our data collection and usage practices. By using Binit!, you agree to the terms described in this policy.'
          />

          <PrivacyItem
            title='2. Data Collection'
            subtitle={
              <div>
                <p>
                  a. Personal Information: We do not collect any personal
                  information from users. This includes but is not limited to
                  names, email addresses, phone numbers, or any other personally
                  identifiable information.
                </p>
                <p>
                  b. Non-Personal Information: We collect non-personal
                  information using analytics tools such as Firebase and
                  Microsoft Clarity. This includes data on user behavior,
                  clicks, and interactions within the app. The purpose of
                  collecting this data is to enhance the user experience and
                  improve our app's functionality.
                </p>
              </div>
            }
          />

          <PrivacyItem
            title='3. Data Usage'
            subtitle={
              <div>
                <p>
                  a. Analytics: We use Firebase and Microsoft Clarity to collect
                  non-personal information for analytical purposes only. This
                  data helps us understand how users interact with our app and
                  allows us to make improvements.
                </p>
              </div>
            }
          />

          <PrivacyItem
            title='4. Data Sharing'
            subtitle='We do not share any data with third parties because we do not collect personal information from users.'
          />

          <PrivacyItem
            title='5. User Consent'
            subtitle='As we collect only anonymous, non-personal information for analytical purposes, we do not ask for explicit user consent.'
          />

          <PrivacyItem
            title='6. User Rights'
            subtitle={
              <div>
                <p>
                  a. Access and Deletion: Users cannot access or delete personal
                  information because we do not collect it.
                </p>
              </div>
            }
          />

          <PrivacyItem
            title='7. Data Retention'
            subtitle="We do not collect and retain users' personal data."
          />

          <PrivacyItem
            title='8. Age Restrictions'
            subtitle='There are no age restrictions for users of the app.'
          />

          <PrivacyItem
            title='9. Data Security'
            subtitle='While we do not collect personal information, we take reasonable measures to secure the data we collect for analytics purposes to prevent unauthorized access or disclosure.'
          />

          <PrivacyItem
            title='10. Updates'
            subtitle='We may update this Privacy Policy when new features are introduced or for other operational, legal, or regulatory reasons. Users will be informed of these updates through in-app announcements.'
          />

          <PrivacyItem
            title='11. Contact Us'
            subtitle='If you have any questions or concerns about this Privacy Policy, please contact us at contact@binit.pro.'
          />

          <PrivacyItem
            title='12. Governing Law'
            subtitle='This Privacy Policy is governed by the laws of Canada.'
          />
        </div>
      </div>
    </section>
  );
};
