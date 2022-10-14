import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhoneContactTitle, ContactListTitle } from './PhoneBook.styled';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactList = contacts.map(({ name }) => name.toLowerCase());
    if (contactList.includes(name.toLowerCase())) {
      window.alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deletePhoneContact = phoneId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== phoneId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalisedFilter)
    );

    return (
      <>
        <Box mb={4}>
          <PhoneContactTitle>Phonebook</PhoneContactTitle>
          <Box>
            <ContactForm onSubmit={this.formSubmitHandler} />
          </Box>
        </Box>
        <Box>
          <ContactListTitle>Contacts</ContactListTitle>
          <Box>
            <Filter value={this.filter} onChange={this.changeFilter} />
            <ContactList
              contacts={filtredContacts}
              onDelete={this.deletePhoneContact}
            />
          </Box>
        </Box>
      </>
    );
  }
}

export default PhoneBook;
