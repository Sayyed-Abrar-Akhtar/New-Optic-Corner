import React, { useEffect, useState } from 'react';
import { CgPushRight } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import styles from '../../styles/CheckoutDrawer.module.css';
import Btn from '../Btn';
import CartItem from '../cart-item/CartItem';
import Spinner from '../spinner/Spinner';

const CheckoutDrawer = ({ setShowCheckoutDrawer }) => {
  const { cartItems, loading } = useSelector((state) => state.newCartItem);

  const [total, setTotal] = useState(0);
  // const [itemsIncart, setItemsInCart] = useState({});

  useEffect(() => {
    let sum = 0;
    Object.keys(cartItems).map((key) => {
      sum += cartItems[key].total;
    });
    setTotal(sum);
  }, [cartItems]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <div
              className='flex items-center justify-start cursor-pointer bg-white w-max rounded px-3 py-2 shadow-md'
              onClick={() => setShowCheckoutDrawer(false)}
            >
              <span className='text-[1.4rem] mr-3 uppercase text-black'>
                close
              </span>
              <CgPushRight className='text-[1.9rem] text-black' />
            </div>

            <div>
              <p className='capitalize font-bold text-[2.25rem] my-[3rem] '>
                Items in your cart
              </p>
            </div>
          </div>
          <div className={styles.cartitem_container}>
            {loading ? (
              <Spinner />
            ) : (
              cartItems.map((cartItem) => (
                <CartItem
                  item={cartItem.item}
                  key={cartItem.item.variant}
                  showName={false}
                />
              ))
            )}
          </div>

          <div className={styles.footer}>
            <div className='flex w-full justify-between items-center my-8'>
              <p className='text-[2rem]'>
                <b>Total:</b>
              </p>
              <p className='text-[2rem]'>रु {total.toFixed(2)}/-</p>
            </div>
            <Btn
              to='/checkout'
              text='Checkout'
              extraClass='w-full text-center h-[5rem] line-height leading-[3rem]'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutDrawer;
