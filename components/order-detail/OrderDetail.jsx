import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonFill, BsFillPhoneFill } from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';

import { getOrder } from '../../redux/actions/orderActions';
import { dateMapper } from '../../utils/dateMapper';
import OrderedItem from '../ordered-item/OrderedItem';
import Spinner from '../spinner/Spinner';

const OrderDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { loading, order } = useSelector((state) => state.order);

  let total = 0;

  if (!!order) {
    total =
      Number(
        order.items.reduce((acc, item) => (acc += item.price * item.qty), 0)
      ) +
      order.tax +
      order.shipping_charge;
  }

  useEffect(() => {
    dispatch(getOrder(router.query.orderid));
  }, [dispatch, router.query.orderid]);

  return (
    <div className='w-full h-full'>
      {loading ? (
        <div className='w-full flex justify-center h-full items-center'>
          <Spinner />
        </div>
      ) : (
        order && (
          <div>
            <div className='my-[3rem]'>
              <h5 className='font-extrabold text-[#00574b]'>#{order._id}</h5>
              <p className='my-4 text-[#018c79] font-bold'>{`
            ${dateMapper(order.createdAt.split('T')[0]).day} 
            ${dateMapper(order.createdAt.split('T')[0]).month},
            ${' '} 
            ${dateMapper(order.createdAt.split('T')[0]).year}
            `}</p>
            </div>
            <div className='flex justify-between text-[#333333]'>
              <div className='w-[55%]'>
                <h6 className='font-semibold'>Order Details</h6>
                <div className='max-h-[30rem] overflow-y-scroll'>
                  {order.items.map((item) => (
                    <div
                      key={order._id}
                      className='flex justify-between items-center even:bg-[#f6f6f6] px-3 my-6 '
                    >
                      <OrderedItem item={item} />
                      <div>रु {(item.qty * item.price).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                <div className='font-bold capitalize'>
                  <div className='py-3 flex items-center justify-between'>
                    <p>tax</p>
                    <p>रु {order.tax}</p>
                  </div>
                  <div className='py-3 flex items-center justify-between'>
                    <p>shipping</p>
                    <p>रु {order.shipping_charge}</p>
                  </div>
                  <div className='py-3 font-extrabold flex items-center justify-between'>
                    <p>Grand Total</p>
                    <p>रु {total}</p>
                  </div>
                </div>
              </div>
              <div className='w-[35%]'>
                <h6 className='font-semibold'>Shipping Information</h6>
                <div className='my-3 capitalize'>
                  <p className='my-6 flex justify-start items-center'>
                    <BsPersonFill />
                    <span className='ml-3'>{order.user.name}</span>
                  </p>
                  <p className='my-6 flex justify-start items-center'>
                    <BsFillPhoneFill />
                    <span className='ml-3'>{order.shipping.phone}</span>
                  </p>
                  <p className='my-6 flex justify-start items-start'>
                    <MdLocationCity />
                    <span className='ml-3'>
                      {order.shipping.address}
                      <br />
                      {order.shipping.city},
                      <br />
                      {order.shipping.province} Pradesh.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default OrderDetail;
