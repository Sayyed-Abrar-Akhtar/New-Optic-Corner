import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  ORDER_PUT_DEL_PAGE,
} from '../../../../../../constant/GlobalConstants';

const orderDetail = () => {
  return <SellercentralScreen screenType={ADMIN} page={ORDER_PUT_DEL_PAGE} />;
};

export default orderDetail;
