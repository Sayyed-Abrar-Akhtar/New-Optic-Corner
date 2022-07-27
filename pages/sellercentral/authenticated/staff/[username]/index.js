import SellercentralScreen from '../../../../../components/sellercentral/SellercentralScreen';
import {
  STAFF,
  STAFF_DASHBOARD,
} from '../../../../../constant/GlobalConstants';

export default function staffHomePage() {
  return <SellercentralScreen screenType={STAFF} page={STAFF_DASHBOARD} />;
}
