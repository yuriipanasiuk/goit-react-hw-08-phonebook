import { Form, Wraper, Input, LabelName } from './ContactForm.styled';
import AddContact from './AddContact';
import { letersRegex, numberRedex } from 'validationSchema';
import { useForm } from 'react-hook-form';

//TODO: add validation message
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Wraper>
        <LabelName>Name</LabelName>
        <Input
          {...register('name', { required: true, pattern: letersRegex })}
          placeholder="Contact name"
        />
        {errors.name && <p>Your name is not bill</p>}
      </Wraper>
      <Wraper>
        <LabelName> Number</LabelName>
        <Input
          {...register('number', { required: true, pattern: numberRedex })}
          placeholder="Phone number"
        />
      </Wraper>
      <input type="submit" />
      {/* <AddContact children="Add contact" /> */}
    </Form>
  );
}
