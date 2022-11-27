import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrerForm/RegisterForm';

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};
