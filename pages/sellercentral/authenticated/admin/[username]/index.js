import SellercentralScreen from '../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  ADMIN_DASHBOARD,
} from '../../../../../constant/GlobalConstants';

const adminHomePage = () => {
  return <SellercentralScreen screenType={ADMIN} page={ADMIN_DASHBOARD} />;
};

export default adminHomePage;
