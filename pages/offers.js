import { useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { getAllProducts } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const allProducts = (state) => state.allProducts;

const OffersPage = ({ pageTitle = 'Offers' }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector(allProducts, shallowEqual);

  const productsInOffer = data.filter((item) => item.tags.includes('offers'));
  console.log(productsInOffer);

  return (
    <div>
      <Layout
        title={`${pageTitle} | New Optic Corner`}
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/contact_lens'
      >
        <ProductGrid title={pageTitle} products={filteredProducts} />
        <Pagination
          itemsPerPage={12}
          items={productsInOffer}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default OffersPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
