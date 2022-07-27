import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  PRODUCT_INDEX_PAGE,
  STAFF,
} from '../../../../../../constant/GlobalConstants';
import { getAllProducts } from '../../../../../../redux/actions/productActions';
import { wrapper } from '../../../../../../redux/store';

export default function staffProductsPage() {
  return <SellercentralScreen screenType={STAFF} page={PRODUCT_INDEX_PAGE} />;
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
