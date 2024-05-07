import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import contactFormStyles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'store/selectors/selectors';
import { addContact } from 'store/sliceContacts/sliceContacts';
import { Notify } from 'notiflix';


const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      return Notify.info(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form className={contactFormStyles.form} onSubmit={handleSubmit}>
        <label className={contactFormStyles.label} htmlFor={nameInputId}>
          Name
          <input
            className={contactFormStyles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={contactFormStyles.label} htmlFor={numberInputId}>
          Number
          <input
            className={contactFormStyles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={contactFormStyles.button} type="submit">
          Add contact{' '}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;