import React from 'react';
import PropTypes from 'prop-types';
import contactListStyles from './style.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={contactListStyles.contactListUl}>
    {contacts.map(contact => (
      <li className={contactListStyles.contactListLi} key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            className={contactListStyles.button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;