import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import { ADMIN, TAGS_PAGE } from '../../../../../../constant/GlobalConstants';

const tagsPage = () => {
  return <SellercentralScreen screenType={ADMIN} page={TAGS_PAGE} />;
};

export default tagsPage;
