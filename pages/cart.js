import CartPage from '../components/cart-page/CartPage';
import Layout from '../components/layout/Layout';

const cart = () => {
  return (
    <div>
      <Layout
        title='Cart | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/cart'
      >
        <CartPage />
      </Layout>
    </div>
  );
};

export default cart;
