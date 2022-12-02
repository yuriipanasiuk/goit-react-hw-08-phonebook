import { Helmet } from 'react-helmet';
import PhoneBook from 'components/PhoneBook';

import { useAuth } from 'hooks/hooks';
import { Container } from 'components/AppBar/AppBar.styled';

const Contacts = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Container>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        {isLoggedIn && <PhoneBook />}
      </Container>
    </>
  );
};

export default Contacts;
