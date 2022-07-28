import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { getAllProducts } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector((state) => state.allProducts);

  return (
    <div>
      <Layout
        title='Sunglasses | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/powerglasses'
      >
        <ProductGrid title='All Products' products={filteredProducts} />
        <Pagination
          itemsPerPage={12}
          items={data}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default AllProductsPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
