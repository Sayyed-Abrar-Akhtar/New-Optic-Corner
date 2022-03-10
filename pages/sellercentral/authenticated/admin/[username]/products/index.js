import ProductListing from '../../../../../../components/product/ProductListing';
import AdminLayout from '../../../../../../components/sellercentral/AdminLayout';

const productsPage = () => {
  return (
    <AdminLayout>
      <ProductListing />
    </AdminLayout>
  );
};

export default productsPage;
