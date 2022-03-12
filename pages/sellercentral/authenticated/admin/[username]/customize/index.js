import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  CUSTOMIZE_PAGE,
} from '../../../../../../constant/GlobalConstants';

const themeCustomize = () => {
  return (
    <SellercentralScreen screenType={ADMIN} page={CUSTOMIZE_PAGE}>
      Customize
    </SellercentralScreen>
  );
};

export default themeCustomize;
