import React from 'react';
import './contact_textfield.css';

const ContactTextField = ({
  title,
  hint,
  type,
  isOneLine,
  value,
  onChange,
}) => {
  return (
    <section
      className='contact_textfield'
      id='contact_textfield'>
      <div className='contact_textfield__container'>
        <label className='contact_textfield__title'>{title}</label>
        {isOneLine ? (
          <input
            type={type}
            name={type}
            className='contact_textfield__input contact_textfield__input_one_line'
            placeholder={hint}
            value={value}
            onChange={onChange}></input>
        ) : (
          <textarea
            className='contact_textfield__input'
            name={type}
            clos='30'
            rows='10'
            placeholder={hint}
            value={value}
            onChange={onChange}></textarea>
        )}
      </div>
    </section>
  );
};

export default ContactTextField;
