import Layout from '../../components/layout/Layout';

import ProductGrid from '../../components/product/ProductGrid';
import ProductPage from '../../components/product/ProductPage';
import { getProductByID } from '../../redux/actions/productActions';
import { wrapper } from '../../redux/store';

const Product = () => {
  return (
    <div>
      <Layout
        title='Product | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/cart'
        classValue='main'
      >
        <ProductPage />
        <ProductGrid title='Similar to the product' />
      </Layout>
    </div>
  );
};

export default Product;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getProductByID(req, params));
    }
);
