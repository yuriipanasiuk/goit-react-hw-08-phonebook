import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Input,
  Form,
  Label,
  ErrorMessage,
  Button,
  LabelName,
} from './RegisterForm.styled';
import { registration } from 'redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(registration(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelName>User Name</LabelName>
        <Input
          type="text"
          autoFocus
          {...register('name', {
            required: true,
          })}
        />
      </Label>
      {errors.name?.type === 'required' && (
        <ErrorMessage tole="alert">user name is required</ErrorMessage>
      )}

      <Label>
        <LabelName>Email</LabelName>
        <Input
          type="email"
          {...register('email', {
            required: true,
          })}
        />
      </Label>
      {errors.email?.type === 'required' && (
        <ErrorMessage tole="alert">email is required</ErrorMessage>
      )}

      <Label>
        <LabelName>Password</LabelName>
        <Input
          type="password"
          {...register('password', {
            required: true,
          })}
        />
      </Label>
      {errors.password?.type === 'required' && (
        <ErrorMessage tole="alert">password is required</ErrorMessage>
      )}

      <Button type="submit">Register</Button>
    </Form>
  );
};
