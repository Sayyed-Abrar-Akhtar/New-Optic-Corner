import SellercentralScreen from '../../../../../components/sellercentral/SellercentralScreen';
import {
  STAFF,
  STAFF_DASHBOARD,
} from '../../../../../constant/GlobalConstants';

const staffHomePage = () => {
  return <SellercentralScreen screenType={STAFF} page={STAFF_DASHBOARD} />;
};

export default staffHomePage;
