import AdminLayout from '../../../../../../components/sellercentral/admin/AdminLayout';
import ProductListing from '../../../../../../components/sellercentral/product/ProductListing';

const productsPage = () => {
  return (
    <AdminLayout adminBaseUrl={'baseUrl'}>
      <ProductListing />
    </AdminLayout>
  );
};

export default productsPage;
