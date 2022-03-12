import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  STAFF_INDEX_PAGE,
} from '../../../../../../constant/GlobalConstants';

const staffPage = () => {
  return <SellercentralScreen screenType={ADMIN} page={STAFF_INDEX_PAGE} />;
};

export default staffPage;
