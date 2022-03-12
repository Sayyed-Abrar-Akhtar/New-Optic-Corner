import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  PRODUCT_INDEX_PAGE,
} from '../../../../../../constant/GlobalConstants';

const ProductsPage = () => {
  return <SellercentralScreen screenType={ADMIN} page={PRODUCT_INDEX_PAGE} />;
};

export default ProductsPage;
