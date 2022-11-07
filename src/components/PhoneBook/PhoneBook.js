import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import { PhoneContactTitle, ContactListTitle } from './PhoneBook.styled';

export default function PhoneBook() {
  return (
    <>
      <Box mb={4}>
        <PhoneContactTitle>Phonebook</PhoneContactTitle>
        <div>
          <ContactForm />
        </div>
      </Box>
      <div>
        <ContactListTitle>Contacts</ContactListTitle>
        <div>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
}
