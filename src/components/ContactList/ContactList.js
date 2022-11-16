import { HiPhone } from 'react-icons/hi';
import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilters } from 'redux/selectors';
import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispath = useDispatch();
  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <HiPhone style={{ color: '#337ab7' }} />
          <PhoneName>{name}</PhoneName>

          <Box display="flex" ml="auto" width="250px">
            <PhoneNumber>{number}</PhoneNumber>
            <Button type="button" onClick={() => dispath(deleteContact(id))}>
              Delete
            </Button>
          </Box>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
