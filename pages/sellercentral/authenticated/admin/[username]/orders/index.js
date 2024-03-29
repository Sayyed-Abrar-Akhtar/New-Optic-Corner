import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  ORDER_INDEX_PAGE,
} from '../../../../../../constant/GlobalConstants';

const orderPage = () => {
  return <SellercentralScreen screenType={ADMIN} page={ORDER_INDEX_PAGE} />;
};

export default orderPage;
