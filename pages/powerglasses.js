import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { PRODUCT_TYPE_POWERGLASSES } from '../constant/GlobalConstants';
import { getAllPowerglasses } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const Powerglasses = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector((state) => state.powerglasses);

  return (
    <div>
      <Layout
        title='Power Glasses | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/powerglasses'
      >
        <ProductGrid title='Power Glasses' products={filteredProducts} />
        <Pagination
          itemsPerPage={12}
          items={data}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default Powerglasses;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllPowerglasses(req));
    }
);
