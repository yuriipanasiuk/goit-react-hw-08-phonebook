import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { PhoneContactTitle, ContactListTitle } from './PhoneBook.styled';

export default function PhoneBook() {
  const [contacts, setContact] = useState(
    () => JSON.parse(window.localStorage.getItem('contact')) ?? []
  );

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactList = contacts.map(({ name }) => name.toLowerCase());
    if (contactList.includes(name.toLowerCase())) {
      return toast.warning(`${name} is already in contacts`);
    }

    setContact(state => [contact, ...state]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deletePhoneContact = phoneId => {
    setContact(contacts => contacts.filter(contact => contact.id !== phoneId));
  };

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      <Box mb={4}>
        <PhoneContactTitle>Phonebook</PhoneContactTitle>
        <Box>
          <ContactForm onSubmit={formSubmitHandler} />
        </Box>
      </Box>
      <Box>
        <ContactListTitle>Contacts</ContactListTitle>
        <Box>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filtredContacts}
            onDelete={deletePhoneContact}
          />
        </Box>
      </Box>
    </>
  );
}
