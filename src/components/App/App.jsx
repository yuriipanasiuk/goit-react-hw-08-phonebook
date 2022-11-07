import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from 'components/Box';
import PhoneBook from 'components/PhoneBook';

export const App = () => {
  return (
    <Box
      bg={'pageBgColor'}
      width="600px"
      ml={'auto'}
      mr={'auto'}
      p={4}
      as="section"
    >
      <PhoneBook />
      <ToastContainer autoClose={3000} />
    </Box>
  );
};
