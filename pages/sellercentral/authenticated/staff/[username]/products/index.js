import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  PRODUCT_INDEX_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const productsPage = () => {
  return <SellercentralScreen screenType={STAFF} page={PRODUCT_INDEX_PAGE} />;
};

export default productsPage;
