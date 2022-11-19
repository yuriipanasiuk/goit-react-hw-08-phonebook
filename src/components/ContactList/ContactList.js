import { HiPhone } from 'react-icons/hi';
import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';
import { useEffect } from 'react';

import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';
//TODO: add delete contact

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(({ name, phone, id }) => (
        <Item key={id}>
          <HiPhone style={{ color: '#337ab7' }} />
          <PhoneName>{name}</PhoneName>

          <Box display="flex" ml="auto" width="250px">
            <PhoneNumber>{phone}</PhoneNumber>
            <Button
              type="button"
              onClick={() => {
                console.log('delete');
              }}
            >
              Delete
            </Button>
          </Box>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
