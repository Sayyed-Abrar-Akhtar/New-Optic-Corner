import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  PRODUCT_PUT_DEL_PAGE,
} from '../../../../../../constant/GlobalConstants';

const productEditAndUpdatePage = () => {
  return <SellercentralScreen screenType={ADMIN} page={PRODUCT_PUT_DEL_PAGE} />;
};

export default productEditAndUpdatePage;
