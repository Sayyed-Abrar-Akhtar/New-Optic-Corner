import { wrapper } from '../redux/store';

import Layout from '../components/layout/Layout';
import Temp from '../components/Temp';
import { getAllProducts } from '../redux/actions/productActions';
import Home from '../components/Home';

export default function Index() {
  return (
    <div>
      <Layout>
        <Temp />
        <Home />
      </Layout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
