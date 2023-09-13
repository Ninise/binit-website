import React from 'react';
import './contact_data.css';

const ContactData = ({ title, data }) => {
  return (
    <section
      className='contact_data section'
      id='contact_data'>
      <div className='contact_data__container'>
        <h1 className='contact_data__title'>{title}</h1>
        <p className='contact_data__description'>{data}</p>
      </div>
    </section>
  );
};

export default ContactData;
