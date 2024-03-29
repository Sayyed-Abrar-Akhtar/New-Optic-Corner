import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ORDER_INDEX_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const ordersPage = () => {
  return <SellercentralScreen screenType={STAFF} page={ORDER_INDEX_PAGE} />;
};

export default ordersPage;
