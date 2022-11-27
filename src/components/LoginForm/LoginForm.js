import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { emailRedex } from '../../utils/validationSchema';
import { logIn } from 'redux/auth/operations';

import {
  Form,
  Label,
  Input,
  Button,
  LabelName,
  ErrorMessage,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelName>Email</LabelName>
        <Input
          type="email"
          {...register('email', {
            required: true,
            pattern: emailRedex,
          })}
        />
        {errors.email?.type === 'required' && (
          <ErrorMessage tole="alert">email is required</ErrorMessage>
        )}
        {errors.email?.type === 'pattern' && (
          <ErrorMessage tole="alert">
            email is not valid, must be xxx@xxx.com
          </ErrorMessage>
        )}
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input
          type="password"
          {...register('password', {
            required: true,
          })}
        />
        {errors.password?.type === 'required' && (
          <ErrorMessage tole="alert">password is required</ErrorMessage>
        )}
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
