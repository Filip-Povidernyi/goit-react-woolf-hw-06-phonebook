import { nanoid } from 'nanoid';
import appStyles from './style.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useState, useEffect } from 'react';

const phoneContacts = [
  { id: 'id-1', name: 'Beyoncé', number: '342-12-44' },
  { id: 'id-2', name: 'Drake', number: '440-22-78' },
  { id: 'id-3', name: 'Taylor Swift', number: '897-11-20' },
  { id: 'id-4', name: 'Shawn Mendes', number: '284-91-51' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: nanoid(), ...contact },
      ...prevContacts,
    ]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
    return (
      <div>
        <h1 className={appStyles.title}>Phonebook</h1>

        <ContactForm onSubmit={addContact} />

        <h2 className={appStyles.title}>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={changeFilter} />
        ) : (
          <p className={appStyles.noContacts}>
            Your phonebook is empty. Add first contact!
          </p>
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        )}
      </div>
    );
  }


export default App;