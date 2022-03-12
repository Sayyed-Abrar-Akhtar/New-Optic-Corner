import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  PRODUCT_PUT_DEL_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const productEditAndUpdatePage = () => {
  return <SellercentralScreen screenType={STAFF} page={PRODUCT_PUT_DEL_PAGE} />;
};

export default productEditAndUpdatePage;
