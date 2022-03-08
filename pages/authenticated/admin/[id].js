import Dashboard from '../../../components/dashboard/Dashboard';
import Layout from '../../../components/layout/Layout';

const adminUser = () => {
  return (
    <div>
      <Layout
        title='ADMIN | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/cart'
        classValue='main'
      >
        <Dashboard />
      </Layout>
    </div>
  );
};

export default adminUser;
