import { Helmet } from 'react-helmet';
import PhoneBook from 'components/PhoneBook';
import Box from 'components/Box';
import { useAuth } from 'hooks/hooks';

export const Contacts = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="main">
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoggedIn && <PhoneBook />}
    </Box>
  );
};
