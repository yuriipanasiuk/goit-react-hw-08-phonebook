import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { Container } from 'components/AppBar/AppBar.styled';

const Login = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default Login;
