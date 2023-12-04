import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../../redux/actions/orderActions';
import { getUserByID } from '../../redux/actions/userActions';
import { dateMapper } from '../../utils/dateMapper';
import Spinner from '../spinner/Spinner';

const OrderListing = ({ baseUrl }) => {
  console.log(baseUrl);
  const dispatch = useDispatch();

  const { loading, orders } = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <section className='w-full h-full my-[2rem]'>
      <div className='flex justify-between py-[2rem] px-[1rem] font-extrabold'>
        <h4>#</h4>
        <h4>Date</h4>
        <h4 className='hidden sm:block'>Order Number</h4>
        <h4>Customer</h4>
      </div>
      {loading ? (
        <div className='w-full flex justify-center'>
          <Spinner />
        </div>
      ) : (
        orders &&
        orders.map((order, idx) => (
          <Link href={`${baseUrl}/orders/${order._id}`} key={order._id}>
            <a className='flex justify-between py-[2rem] px-[1rem] even:bg-[#018c7980]'>
              <h4>{idx + 1}</h4>
              <div>{`${dateMapper(order.createdAt.split('T')[0]).day} ${
                dateMapper(order.createdAt.split('T')[0]).month
              }, ${dateMapper(order.createdAt.split('T')[0]).year}`}</div>
              <div className='hidden sm:block'>{order._id}</div>
              <div>{order.user.name}</div>
            </a>
          </Link>
        ))
      )}
    </section>
  );
};

export default OrderListing;
