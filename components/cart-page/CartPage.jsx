import React from 'react';
import { useSelector } from 'react-redux';
import Btn from '../Btn';
import CartItem from '../cart-item/CartItem';
import Spinner from '../spinner/Spinner';

const CartPage = () => {
  const { loading, cartItems } = useSelector((state) => state.newCartItem);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : cartItems.length > 0 ? (
        <div className='my-[3rem] pb-[10rem]'>
          <h3 className='heading'>Items in your cart</h3>
          <div className='w-[90%] box-border md:w-max md:min-w-[60%] mx-auto'>
            <div className='even:bg-[#eeeeee]'>
              {cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.item.variant}
                  item={cartItem.item}
                  showName={true}
                />
              ))}
            </div>
            <div className='py-[3rem] my-10 border-t-2 border-b-2 md:min-w-[60%] mx-auto flex justify-between'>
              <h3 className='font-bold'>Total</h3>
              <h3 className='font-semibold'>
                रु{' '}
                {cartItems
                  .reduce((acc, cartItem) => (acc += cartItem.total), 0)
                  .toFixed(2)}
                /-
              </h3>
            </div>

            <div className='w-full flex items-center justify-center'>
              <Btn
                to='/checkout'
                text='Checkout'
                extraClass='w-[90%] md:w-[50%] text-center'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='mx-auto mt-[15rem] mb-[20rem] flex justify-center'>
          <h2>Your cart is empty!</h2>
        </div>
      )}
    </>
  );
};

export default CartPage;
