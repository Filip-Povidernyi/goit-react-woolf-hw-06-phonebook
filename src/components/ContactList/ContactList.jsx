import React from 'react';
import contactListStyles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'store/selectors/selectors';
import { removeContact } from 'store/sliceContacts/sliceContacts';


const ContactList = () => {
  
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={contactListStyles.contactListUl}>
        {contacts.map(contact => (
          <li className={contactListStyles.contactListLi} key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            {
              <button
                className={contactListStyles.button}
                type="button"
                name="delete"
                onClick={() => {
                  dispatch(removeContact(contact));
                }}
              >
                delete
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;