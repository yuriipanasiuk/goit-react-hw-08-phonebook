import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneBook from 'components/PhoneBook';
import { Layout } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <PhoneBook />
      <ToastContainer autoClose={3000} />
    </Layout>
  );
};
