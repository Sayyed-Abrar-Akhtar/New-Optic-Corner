import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';

import {
  ADMIN,
  PRODUCT_ADD_PAGE,
} from '../../../../../../constant/GlobalConstants';

const NewProductPage = () => {
  return <SellercentralScreen screenType={ADMIN} page={PRODUCT_ADD_PAGE} />;
};

export default NewProductPage;
