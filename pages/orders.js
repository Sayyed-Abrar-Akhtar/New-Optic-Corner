import React from 'react';
import { useSession } from 'next-auth/react';

import Layout from '../components/layout/Layout';
import OrdersPage from '../components/orders-page/OrdersPage';
import { getUsersOrder } from '../redux/actions/orderActions';
import { wrapper } from '../redux/store';
import { AUTHENTICATED } from '../constant/GlobalConstants';

//
export default function Orders() {
  return (
    <Layout
      title='Your Orders | New Optic Corner'
      description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
      ogUrl='https://www.newopticcorner.com.np/orders'
    >
      <OrdersPage />
    </Layout>
  );
}
