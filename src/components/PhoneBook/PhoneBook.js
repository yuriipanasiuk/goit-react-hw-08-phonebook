import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { getError, getIsLoading, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import {
  PhoneContactTitle,
  ContactListTitle,
  Notice,
} from './PhoneBook.styled';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
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

      {contacts.length > 0 ? (
        <div>
          <Box display="flex" mb={4} alignItems="center">
            <ContactListTitle>Contacts</ContactListTitle>
            {isLoading && !error && <BeatLoader color={'#337ab7'} />}
          </Box>
          <div>
            <Filter />
            <ContactList />
          </div>
        </div>
      ) : (
        <Box display="flex" justifyContent="center">
          {isLoading && !error ? (
            <FadeLoader color={'#337ab7'} />
          ) : (
            <Notice>your contact list is empty</Notice>
          )}
        </Box>
      )}
    </>
  );
}
