import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  CUSTOMIZE_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const customize = () => {
  return <SellercentralScreen screenType={STAFF} page={CUSTOMIZE_PAGE} />;
};

export default customize;
