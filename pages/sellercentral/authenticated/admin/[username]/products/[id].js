import SellercentralScreen from '../../../../../../components/sellercentral/SellercentralScreen';
import {
  ADMIN,
  PRODUCT_PUT_DEL_PAGE,
} from '../../../../../../constant/GlobalConstants';
import { getProductByID } from '../../../../../../redux/actions/productActions';
import { wrapper } from '../../../../../../redux/store';

const productEditAndUpdatePage = () => {
  return <SellercentralScreen screenType={ADMIN} page={PRODUCT_PUT_DEL_PAGE} />;
};

export default productEditAndUpdatePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getProductByID(req));
    }
);
