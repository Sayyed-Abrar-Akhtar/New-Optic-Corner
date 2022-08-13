import React from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { MdClose, MdDeleteForever } from 'react-icons/md';

import styles from '../../styles/CartItem.module.css';
import { delCartItem } from '../../redux/actions/cartItemsAction';

const CartItem = ({ item, showName = true }) => {
  const dispatch = useDispatch();

  const productClickHandler = (e) => {
    e.preventDefault();

    window.location.href = `/product/${item.product}`;
  };

  const removeCartItemHandler = (e) => {
    e.preventDefault();
    dispatch(delCartItem(item.variant));
  };

  return (
    <>
      {item !== undefined && (
        <div className={styles.container}>
          <div className='flex cursor-pointer' onClick={productClickHandler}>
            <div className='relative w-[5rem] h-[5rem] rounded overflow-hidden shadow-2xl'>
              <Image
                src={item.image}
                layout='fill'
                alt={'variant item image'}
              />
            </div>
            {showName && (
              <div className='flex items-center ml-4 font-semibold text-3xl w-[100%]'>
                {item.name}
              </div>
            )}
          </div>
          <div className='flex justify-center items-center'>
            <p>
              <b>{item.qty}</b>
            </p>
            <span className='mx-4'>
              <MdClose />
            </span>
            <p>
              <b>{item.price.toFixed(2)}</b>
            </p>
          </div>
          <div className='flex items-center justify-end px-2'>
            <p>
              <b>{(item.qty * item.price).toFixed(2)}</b>
            </p>
            <span
              className='pl-4 text-4xl cursor-pointer text-red-600'
              onClick={removeCartItemHandler}
            >
              <MdDeleteForever />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
