import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import {
  PhoneContactTitle,
  ContactListTitle,
  Notice,
} from './PhoneBook.styled';
import { useSelector } from 'react-redux';

export default function PhoneBook() {
  const contacts = useSelector(state => state.contacts);

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
