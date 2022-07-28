import { wrapper } from '../redux/store';

import Layout from '../components/layout/Layout';
import { getTrendingProducts } from '../redux/actions/productActions';
import Home from '../components/Home';
import { getThemeData } from '../redux/actions/themeActions';

export default function Index() {
  return (
    <div>
      <Layout
        title='Home | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/'
      >
        <Home />
      </Layout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getThemeData(req));
      await store.dispatch(getTrendingProducts(req));
    }
);
