import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import { Component } from 'react';
import { PhoneContactTitle, ContactListTitle } from './PhoneBook.styled';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Box>
          <PhoneContactTitle>Phonebook</PhoneContactTitle>
          <Box>
            <ContactForm />
          </Box>
        </Box>
        <Box>
          <ContactListTitle>Contacts</ContactListTitle>
          <Box>
            <Filter />
            <ContactList contacts={contacts} />
          </Box>
        </Box>
      </>
    );
  }
}

export default PhoneBook;
