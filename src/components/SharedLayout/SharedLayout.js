import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
};
