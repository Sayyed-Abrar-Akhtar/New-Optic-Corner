import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import { STAFF, TAGS_PAGE } from '../../../../../../constant/GlobalConstants';

const tagsPage = () => {
  return <SellercentralScreen screenType={STAFF} page={TAGS_PAGE} />;
};

export default tagsPage;
