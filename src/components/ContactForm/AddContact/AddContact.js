import { Button } from './AddContact.styled';

const AddContact = ({ type = 'submit', children }) => {
  return <Button type={type}>{children}</Button>;
};

export default AddContact;
