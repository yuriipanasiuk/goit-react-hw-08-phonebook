import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import {
  PhoneContactTitle,
  ContactListTitle,
  Notice,
} from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function PhoneBook() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Box mb={4}>
        <PhoneContactTitle>Phonebook</PhoneContactTitle>
        <div>
          <ContactForm />
        </div>
      </Box>
      {contacts.length > 0 ? (
        <div>
          <ContactListTitle>Contacts</ContactListTitle>
          <div>
            <Filter />
            <ContactList />
          </div>
        </div>
      ) : (
        <Notice>your contact list is empty</Notice>
      )}
    </>
  );
}
