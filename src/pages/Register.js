import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrerForm/RegisterForm';
import { Container } from 'components/AppBar/AppBar.styled';

const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </Container>
  );
};

export default Register;
