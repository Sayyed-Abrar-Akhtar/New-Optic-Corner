import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Pagination from '../components/pagination/Pagination';
import ProductGrid from '../components/product/ProductGrid';
import { PRODUCT_TYPE_CONTACT_LENS } from '../constant/GlobalConstants';
import { getAllContactLenses } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';

const ContactLens = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    products: { data },
  } = useSelector((state) => state.contactLenses);

  const contactLenses = data.filter(
    (item) =>
      item.product_type && item.product_type === PRODUCT_TYPE_CONTACT_LENS
  );

  return (
    <div>
      <Layout
        title='Contact Lens | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/contact_lens'
      >
        <ProductGrid title='Contact lens' products={filteredProducts} />
        <Pagination
          itemsPerPage={12}
          items={data}
          setFilteredItems={setFilteredProducts}
        />
      </Layout>
    </div>
  );
};

export default ContactLens;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllContactLenses(req));
    }
);
