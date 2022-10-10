import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import Filter from 'components/ContactForm/Filter/Filter';
import { nanoid } from 'nanoid';
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
    filter: '',
  };
  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactList = contacts.map(contact => contact.name.toLowerCase());
    if (contactList.includes(name.toLowerCase())) {
      window.alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deletePhoneContact = phoneId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== phoneId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  // reset() {
  //   this.setState({
  //     filter: '',
  //   });
  // }

  render() {
    const { contacts } = this.state;
    const normalisedFilter = this.state.filter.toLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );

    return (
      <>
        <Box>
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
