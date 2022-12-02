import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/hooks';

import { Title, Container, StyledLink } from './Home.styled';
import Box from 'components/Box';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {isLoggedIn ? (
        <Title>
          Phone book welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      ) : (
        <Box display="flex" flexDirection="column">
          <Title>
            To use the application "Phone book" you must{' '}
            <StyledLink to="/register">register</StyledLink> or{' '}
            <StyledLink to="/login">log in</StyledLink>
          </Title>
        </Box>
      )}
    </Container>
  );
};

// to use the application you must register or log in
