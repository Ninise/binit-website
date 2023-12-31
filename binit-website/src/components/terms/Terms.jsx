import React from 'react';
import '../privacy/privacy.css';

import PrivacyItem from '../privacy/PrivacyItem';

export const Terms = () => {
  return (
    <section
      className='terms section'
      id='terms'>
      <div className='privacy__container container grid'>
        <div className='privacy__content grid'>
          <h1>Terms & Conditions</h1>

          <PrivacyItem
            title='1. Introduction'
            subtitle='Welcome to Binit, a garbage sorting and educational app operated by WhaleScale company (\"we,\" \"us,\" or \"our\"). By accessing and using the Binit app, you agree to comply with these Terms and Conditions.'
          />

          <PrivacyItem
            title='2. App Description'
            subtitle='Binit! is designed to simplify garbage sorting and educate users on proper sorting methods through search, games, and articles. Please note that Binit! does not collect any personal information from users, and no user accounts are required.'
          />

          <PrivacyItem
            title='3. Accessibility'
            subtitle='Binit! app is accessible via mobile phones and the website, available on all devices.'
          />

          <PrivacyItem
            title='4. Content Usage'
            subtitle='While using Binit!, you may access content from open sources or generated by us. If you choose to share or use our content, please provide proper attribution by tagging us.'
          />

          <PrivacyItem
            title='5. In-app Purchases'
            subtitle='Binit! does not offer any in-app purchases.'
          />

          <PrivacyItem
            title='6. Contact Us'
            subtitle='For any inquiries or support, you can contact us via email at contact@binit.pro. We aim to respond within one business day.'
          />

          <PrivacyItem
            title='7. Disclaimer'
            subtitle='Binit! gathers data from governmental open sources to provide garbage sorting information. We are not responsible for the correctness or accuracy of this data.'
          />

          <PrivacyItem
            title='8. Consequences'
            subtitle='There are no consequences for violating these terms and conditions, as long as users abide by the law and ethical standards.'
          />

          <PrivacyItem
            title='9. Privacy Policy'
            subtitle='We have a separate Privacy Policy that outlines how user data is handled. Please review our Privacy Policy for more information on data collection, use, and protection.'
          />

          <PrivacyItem
            title='10. Updates'
            subtitle='We may update these terms and conditions when new features are introduced. Users will be notified of such updates through in-app announcements.'
          />

          <PrivacyItem
            title='11. Governing Law'
            subtitle='These terms and conditions are governed by the laws of Canada.'
          />

          <PrivacyItem
            title='12. Contact Information'
            subtitle='If you have any questions or concerns about these terms and conditions, please contact us at contact@binit.pro.'
          />
        </div>
      </div>
    </section>
  );
};
