import PropTypes from 'prop-types';
import { HiPhone } from 'react-icons/hi';

import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

//TODO: add notice, when add contact that already is in args

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispath = useDispatch();

  // if (contactList.includes(name.toLowerCase())) {
  //   return toast.warning(`${name} is already in contacts`);
  // }

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
