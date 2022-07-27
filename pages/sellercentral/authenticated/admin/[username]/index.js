import SellercentralScreen from '../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  ADMIN_DASHBOARD,
} from '../../../../../constant/GlobalConstants';

export default function adminHomePage() {
  return <SellercentralScreen screenType={ADMIN} page={ADMIN_DASHBOARD} />;
}
