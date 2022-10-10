import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <PhoneName>{name}</PhoneName>
          <PhoneNumber>{number}</PhoneNumber>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
