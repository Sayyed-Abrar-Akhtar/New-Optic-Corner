import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  PRODUCT_INDEX_PAGE,
} from '../../../../../../constant/GlobalConstants';
import { getAllProducts } from '../../../../../../redux/actions/productActions';
import { wrapper } from '../../../../../../redux/store';

export default function adminProductsPage() {
  return <SellercentralScreen screenType={ADMIN} page={PRODUCT_INDEX_PAGE} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllProducts(req));
    }
);
