import { wrapper } from '../redux/store';

import Layout from '../components/layout/Layout';
import { getAllProducts } from '../redux/actions/productActions';
import Home from '../components/Home';
import { getThemeData } from '../redux/actions/themeActions';

export default function Index() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
      await store.dispatch(getThemeData(req));
    }
);
