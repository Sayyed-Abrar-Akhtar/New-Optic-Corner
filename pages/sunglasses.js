import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { PRODUCT_TYPE_SUNGLASSES } from '../constant/GlobalConstants';
import { getAllSunglasses } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const Sunglasses = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector((state) => state.sunglasses);

  return (
    <div>
      <Layout
        title='Sunglasses | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/sunglasses'
      >
        <ProductGrid title='Sunglasses' products={filteredProducts} />
        <Pagination
          itemsPerPage={12}
          items={data}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default Sunglasses;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllSunglasses(req));
    }
);
