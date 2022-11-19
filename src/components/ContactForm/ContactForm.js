import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { letersRegex, numberRedex } from '../../utils/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Wraper,
  Input,
  LabelName,
  ErrorMessage,
  Button,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', number: '' } });

  const getContact = data => {
    const { name } = data;

    const contactsList = contacts.map(({ name }) => name.toLowerCase());

    if (contactsList.includes(name.toLowerCase())) {
      reset();
      return toast.warning(`${name} is already in contacts`);
    }

    dispatch(addContact(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(getContact)} autoComplete="off">
      <Wraper>
        <LabelName>Name</LabelName>
        <Input
          {...register('name', {
            required: true,
            pattern: letersRegex,
            minLength: 3,
          })}
          placeholder="Contact name"
          autoFocus
        />
        {errors.name?.type === 'pattern' && (
          <ErrorMessage tole="alert">
            The name should have only english alphabets
          </ErrorMessage>
        )}
        {errors.name?.type === 'required' && (
          <ErrorMessage role="alert">contact name is required</ErrorMessage>
        )}
        {errors.name?.type === 'minLength' && (
          <ErrorMessage role="alert">
            contact name must be at least 3 letters
          </ErrorMessage>
        )}
      </Wraper>
      <Wraper>
        <LabelName> Number</LabelName>
        <Input
          {...register('number', {
            required: true,
            pattern: numberRedex,
          })}
          placeholder="Phone number"
        />
        {errors.number?.type === 'pattern' && (
          <ErrorMessage tole="alert">
            The number should have digits only
          </ErrorMessage>
        )}
        {errors.number?.type === 'required' && (
          <ErrorMessage role="alert">contact number is required</ErrorMessage>
        )}
      </Wraper>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
