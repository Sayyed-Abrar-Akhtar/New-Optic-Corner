import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  STAFF_PUT_DEL_PAGE,
} from '../../../../../../constant/GlobalConstants';

const updateDeleteStaff = () => {
  return <SellercentralScreen screenType={ADMIN} page={STAFF_PUT_DEL_PAGE} />;
};

export default updateDeleteStaff;
