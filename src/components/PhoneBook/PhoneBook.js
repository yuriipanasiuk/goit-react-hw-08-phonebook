import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
// import Filter from 'components/ContactForm/Filter/Filter';
import { PhoneContactTitle, ContactListTitle } from './PhoneBook.styled';
// import { useSelector, useDispatch } from 'react-redux';

export default function PhoneBook() {
  return (
    <>
      <Box mb={4}>
        <PhoneContactTitle>Phonebook</PhoneContactTitle>
        <Box>
          <ContactForm />
        </Box>
      </Box>
      <Box>
        <ContactListTitle>Contacts</ContactListTitle>
        <Box>
          {/* <Filter value={filter} onChange={changeFilter} /> */}
          <ContactList
          // contacts={filtredContacts}
          // onDelete={deletePhoneContact}
          />
        </Box>
      </Box>
    </>
  );
}
