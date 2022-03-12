import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  STAFF_ADD_PAGE,
} from '../../../../../../constant/GlobalConstants';

const newStaff = () => {
  return <SellercentralScreen screenType={ADMIN} page={STAFF_ADD_PAGE} />;
};

export default newStaff;
