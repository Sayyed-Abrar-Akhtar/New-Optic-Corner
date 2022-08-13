import Layout from '../components/layout/Layout';
import CheckoutPage from '../components/checkout-page/CheckoutPage';

export default function Checkout() {
  return (
    <Layout
      title='Checkout | New Optic Corner'
      description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
      ogUrl='https://www.newopticcorner.com.np/checkout'
    >
      <CheckoutPage />
    </Layout>
  );
}
