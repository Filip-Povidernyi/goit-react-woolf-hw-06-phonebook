import appStyles from './style.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'store/selectors/selectors';



const App = () => {
  
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1 className={appStyles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={appStyles.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p className={appStyles.noContacts}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;