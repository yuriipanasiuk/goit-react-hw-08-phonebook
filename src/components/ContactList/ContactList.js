import { HiPhone } from 'react-icons/hi';
import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filtredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <HiPhone style={{ color: '#337ab7' }} />
          <PhoneName>{name}</PhoneName>

          <Box display="flex" ml="auto" width="250px">
            <PhoneNumber>{number}</PhoneNumber>
            <Button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </Button>
          </Box>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
