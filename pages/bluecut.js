import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { getAllProducts } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const BluecutPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector((state) => state.allProducts);

  const pageProducts = data.filter((product) =>
    product.tags.includes('bluecut')
  );

  return (
    <div>
      <Layout
        title='Blue Cut | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/bluecut'
      >
        <ProductGrid title='Blue Cut Eyewear' products={pageProducts} />
        <Pagination
          itemsPerPage={12}
          items={data}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default BluecutPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
