import LoginForm from '../../components/account/LoginForm';
import Layout from '../../components/layout/Layout';

const login = () => {
  return (
    <Layout
      title='Login | New Optic Corner'
      description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
      ogUrl='https://www.newopticcorner.com.np/account'
      classValue='main'
    >
      <LoginForm />
    </Layout>
  );
};

export default login;
