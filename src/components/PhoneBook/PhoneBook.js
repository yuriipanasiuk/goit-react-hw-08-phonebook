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
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

//TODO: transfer logic from phoneBook to App

export default function PhoneBook() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box mb={4}>
        <PhoneContactTitle>Phonebook</PhoneContactTitle>
        <div>
          <ContactForm />
        </div>
      </Box>
      {isLoading && !error && <b>Request in progress...</b>}
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
