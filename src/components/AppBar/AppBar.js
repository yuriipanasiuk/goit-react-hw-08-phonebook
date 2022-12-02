import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'hooks/hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { Layout } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Layout>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Layout>
    </Header>
  );
};
