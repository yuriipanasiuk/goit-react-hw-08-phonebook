import { useForm } from 'react-hook-form';
import {
  Form,
  Wraper,
  Input,
  LabelName,
  ErrorMessage,
} from './ContactForm.styled';
import AddContact from './AddContact';
import { letersRegex, numberRedex } from 'validationSchema';

export default function ContactForm(props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', number: '' } });

  const onSubmit = data => {
    props.onSubmit(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

      <AddContact children="Add contact" />
    </Form>
  );
}
