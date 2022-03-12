import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';

import {
  PRODUCT_ADD_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';

const NewProductPage = () => {
  return <SellercentralScreen screenType={STAFF} page={PRODUCT_ADD_PAGE} />;
};

export default NewProductPage;
