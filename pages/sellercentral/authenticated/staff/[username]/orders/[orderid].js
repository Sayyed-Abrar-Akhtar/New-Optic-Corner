import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ORDER_PUT_DEL_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const orderDetail = () => {
  return <SellercentralScreen screenType={STAFF} page={ORDER_PUT_DEL_PAGE} />;
};

export default orderDetail;
