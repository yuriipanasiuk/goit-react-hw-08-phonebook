import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <PhoneName>{name}</PhoneName>
          <PhoneNumber>{number}</PhoneNumber>
          <Button type="button">Delete</Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
