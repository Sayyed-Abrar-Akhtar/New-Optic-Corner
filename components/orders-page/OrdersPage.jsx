import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AUTHENTICATED,
  LOADING,
  ORDER_REDIRECT,
  UNAUTHENTICATED,
} from '../../constant/GlobalConstants';
import { getUsersOrder } from '../../redux/actions/orderActions';
import Spinner from '../spinner/Spinner';

import styles from '../../styles/OrdersPage.module.css';
import Image from 'next/image';
import OrderedItem from '../ordered-item/OrderedItem';
import { dateMapper } from '../../utils/dateMapper';
import { totalAmountCalculator } from '../../utils/totalAmountCalculator';

const OrdersPage = () => {
  const { status, data } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.userOrders);
  console.log(orders);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === LOADING) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (status === UNAUTHENTICATED) {
      router.push({
        pathname: '/account',
        query: { type: ORDER_REDIRECT },
      });
    }
    if (status === AUTHENTICATED) {
      dispatch(getUsersOrder(data.user._id));
    }
  }, [dispatch, status, data, router]);

  return (
    <>
      {loading ? (
        <div className='w-[100vw] h-[100vh] flex justify-center'>
          <Spinner />
        </div>
      ) : (
        <section className={`mt-[5rem] mb-[15rem] mx-auto ${styles.container}`}>
          <h2 className='heading'>Your Orders</h2>
          <div className=''>
            <div
              className={`px-4 border-t-2 border-b-2 ${styles.table_header}`}
            >
              <h4>Date</h4>
              <h4>Item</h4>
              <h4>Total</h4>
            </div>

            <div className='h-[40rem] overflow-y-scroll '>
              {orders &&
                orders.length > 0 &&
                orders.map((order) => (
                  <div
                    key={order._id}
                    className={`odd:bg-[#eeeeee]  px-4 ${styles.table_content}`}
                  >
                    {order.items.length > 0 && (
                      <h5
                        className={`flex flex-col justify-center items-start ${styles.item_date_box}`}
                      >
                        <span className='mr-35'>
                          {dateMapper(order.createdAt.split('T')[0]).day}{' '}
                          {dateMapper(order.createdAt.split('T')[0]).month}
                          {','}
                        </span>
                        <span className='mr-35'>
                          {dateMapper(order.createdAt.split('T')[0]).year}
                        </span>
                      </h5>
                    )}

                    <div className='flex flex-col'>
                      {order.items.map((item) => (
                        <OrderedItem key={item.variant} item={item} />
                      ))}
                    </div>
                    <div className='flex justify-center items-center'>
                      {order.items.length > 0 && (
                        <h4>
                          रु{' '}
                          {order.items.reduce(
                            (acc, item) => (acc += item.qty * item.price),
                            0
                          )}
                        </h4>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className=''>
              <h4 className='px-4 flex items-center justify-between font-bold h-[7.5rem] border-t-2 border-b-2'>
                <span>Grand Total</span>
                {orders && orders.length > 0 && (
                  <span>रु {totalAmountCalculator(orders)}</span>
                )}
              </h4>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrdersPage;
