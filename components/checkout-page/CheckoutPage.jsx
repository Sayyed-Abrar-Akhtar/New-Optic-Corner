import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import InputField from '../form/InputField';
import Spinner from '../spinner/Spinner';
import CartItem from '../cart-item/CartItem';
import SelectInput from '../form/SelectInput';

import { placeOrder } from '../../redux/actions/orderActions';
import { NEW_CART_ITEM_RESET } from '../../redux/constants/cartItemsConstants';
import { PLACE_ORDER_RESET } from '../../redux/constants/orderConstants';

import { sendEmailNotification } from '../../utils/emailNotification';

import {
  AUTHENTICATED,
  PROVINCE_1,
  BAGMATI,
  CHECKOUT_REDIRECT,
  LOADING,
  UNAUTHENTICATED,
  MADHESH,
  GANDAKI,
  LUMBINI,
  KARNALI,
  SUDUR_PASHCHIM,
} from '../../constant/GlobalConstants';

const CheckoutPage = () => {
  const { status, data } = useSession();

  const { cartItems } = useSelector((state) => state.newCartItem);
  const { success, order } = useSelector((state) => state.orderPlaced);

  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let showSuccessTimeout;
    const triggerCreateOrder = async () => {
      if (success) {
        await sendEmailNotification(order._id, data.user.name, data.user.email);
        setShowSuccess(true);
        showSuccessTimeout = setTimeout(() => {
          dispatch({ type: NEW_CART_ITEM_RESET });
          dispatch({ type: PLACE_ORDER_RESET });
          router.push('/orders');
          setShowSuccess(false);
          console.log('yo');
        }, [5000]);
      }
    };

    triggerCreateOrder();

    if (status === LOADING) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (status === UNAUTHENTICATED) {
      router.push({
        pathname: '/account',
        query: { type: CHECKOUT_REDIRECT },
      });
    }
    if (cartItems.length > 0) {
      const totalItemPrice = cartItems.reduce(
        (accumulator, cartItem) => (accumulator += cartItem.total),
        0
      );
      setSubtotal(totalItemPrice);

      //const taxOnItem = Number((totalItemPrice * 13) / 100).toFixed(2);
      setTax(0);
    }
    shippingCharge(province);

    return () => {
      clearTimeout(showSuccessTimeout);
      triggerCreateOrder;
    };
  }, [router, data, order, status, cartItems, province, success, dispatch]);

  const shippingCharge = (province) => {
    switch (province) {
      case PROVINCE_1.value:
        return setShipping(100);
      case BAGMATI.value:
        return setShipping(0);
      case MADHESH.value:
      case GANDAKI.value:
      case LUMBINI.value:
      case KARNALI.value:
      case SUDUR_PASHCHIM.value:
        return setShipping(150);
      default:
        return setShipping(100);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const items = cartItems.map((cartItem) => ({
      name: cartItem.item.name,
      image: cartItem.item.image,
      price: cartItem.item.price,
      qty: cartItem.item.qty,
      product: cartItem.item.product,
      variant: cartItem.item.variant,
    }));

    const reqBody = {
      user: data.user._id,
      items,
      shipping: {
        address,
        city,
        province,
        phone,
      },
      shipping_charge: shipping,
      tax,
    };

    //console.log(reqBody);
    dispatch(placeOrder(reqBody));
  };

  return (
    <>
      {showSuccess ? (
        <div className='w-full h-[50rem] flex items-center justify-center'>
          <div className='success_element flex flex-col items-center justify-center text-white  bg-[#018c79] w-[40rem] h-[25rem] rounded shadow'>
            <h3 className='w-[80%] text-center mb-8'>
              We have received your order!
            </h3>
            <Link href='/orders'>
              <a className='cta'>View orders</a>
            </Link>
          </div>
        </div>
      ) : loading ? (
        <div className='w-[100vw] h-[100vh] flex justify-center'>
          <Spinner />
        </div>
      ) : (
        status === AUTHENTICATED && (
          <section className='mt-[5rem] mb-[15rem] mx-auto'>
            <h2 className='heading'>Checkout</h2>
            <div className='flex flex-col-reverse md:flex-row md:flex-wrap md:items-start'>
              <div className='w-[90%] mx-[5%] md:w-[50%] flex flex-col justify-center'>
                <div className='w-full mx-auto md:w-[100%] p-[3rem]'>
                  <h3 className='text-3xl my-6 font-bold'>
                    <span className='mr-3'>Name:</span>
                    <span className='ml-3'>{data.user.name}</span>
                  </h3>
                  <h3 className='text-3xl my-6 font-bold'>
                    <span className='mr-3'>Email:</span>
                    <span className='ml-3'>{data.user.email}</span>
                  </h3>
                </div>
                <div className='w-full mx-auto md:w-[100%] p-2 rounded'>
                  <h4 className='py-4 px-9 font-semibold'>Shipping Details:</h4>
                  <form onSubmit={submitHandler} className='block mb-12 w-full'>
                    <InputField
                      type='text'
                      label='Mobile Number'
                      id='mobile-number'
                      value={phone}
                      setValue={setPhone}
                      required
                    />
                    <InputField
                      type='text'
                      label='Address'
                      id='address'
                      value={address}
                      setValue={setAddress}
                      required
                    />
                    <InputField
                      type='text'
                      label='City'
                      id='city'
                      value={city}
                      setValue={setCity}
                      required
                    />

                    <SelectInput
                      name='province'
                      ID='province'
                      label='Select Province'
                      setValue={setProvince}
                    >
                      <option value={PROVINCE_1.value}>
                        {PROVINCE_1.name}
                      </option>
                      <option value={BAGMATI.value}>{BAGMATI.name}</option>
                      <option value={MADHESH.value}>{MADHESH.name}</option>
                      <option value={GANDAKI.value}>{GANDAKI.name}</option>
                      <option value={LUMBINI.value}>{LUMBINI.name}</option>
                      <option value={KARNALI.value}>{KARNALI.name}</option>
                      <option value={SUDUR_PASHCHIM.value}>
                        {SUDUR_PASHCHIM.name}
                      </option>
                    </SelectInput>

                    <div className='m-12 flex justify-center'>
                      <button type='submit' className='cta'>
                        Place an order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='w-[90%] px-10 mx-[5%] md:w-[35%] md:px-0 md:mx-0 my-[3rem] font-bold '>
                {cartItems.length > 0 ? (
                  <>
                    <h4 className='mb-12'>Order Summary</h4>
                    <div className='h-[25rem] overflow-y-scroll'>
                      {cartItems.map((cartItem, idx) => (
                        <CartItem
                          key={`${
                            new Date().getMilliseconds() * (idx + 1) * 36155
                          }${cartItem.item.variant}${cartItem.item.product}`}
                          item={cartItem.item}
                          showName={false}
                        />
                      ))}
                    </div>
                    <div className='py-6 border-t-2 flex justify-between'>
                      <p>Subtotal</p>
                      <p>{subtotal.toFixed(2)}/-</p>
                    </div>
                    {tax > 0 && (
                      <div className='py-6 flex justify-between'>
                        <p>Tax</p>
                        <p>{tax}/-</p>
                      </div>
                    )}
                    <div className='py-6  border-b-2 flex justify-between'>
                      <p>Shipping</p>
                      <p>{shipping.toFixed(2)}/-</p>
                    </div>

                    <div className='py-6  border-b-2 flex justify-between'>
                      <h4>Total</h4>
                      <h4>रु {(subtotal + shipping).toFixed(2)}/-</h4>
                    </div>
                  </>
                ) : (
                  <p>Your cart is empty!</p>
                )}
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default CheckoutPage;
