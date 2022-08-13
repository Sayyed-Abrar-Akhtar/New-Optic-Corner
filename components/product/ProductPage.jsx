import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Description from './Description';
import Images from './Images';
import Price from './Price';
import Stock from './Stock';
import Variant from './Variant';
import Spinner from '../spinner/Spinner';

import styles from '../../styles/Product.module.css';
import CheckoutDrawer from '../checkout-drawer/CheckoutDrawer';
import { addItemsToCart } from '../../redux/actions/cartItemsAction';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    data: { product },
    loading,
    error,
  } = useSelector((state) => state.product);

  const { cartItems } = useSelector((state) => state.newCartItem);

  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(product.variant[0]);
  const [featuredImage, setFeaturedImage] = useState(product.featured_image);

  const [showCheckout, setShowCheckout] = useState(false);
  const [showCheckoutDrawer, setShowCheckoutDrawer] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCheckout(false);
    }
    cartItems.forEach((cartItem) => {
      if (cartItem.item.variant === variant._id) {
        setShowCheckout(true);
      } else {
        setShowCheckout(false);
      }
    });
  }, [cartItems, variant._id]);

  const getSelectedVariant = (idx) => {
    setVariant({ ...product.variant[idx] });
    setFeaturedImage(product.variant[idx].images[0].secure_url);
  };

  const addTocartHandler = (e) => {
    e.preventDefault();

    const subtotal = variant.price - variant.price * (product.discount / 100);

    const cartObj = {
      item: {
        name: product.title,
        image: variant.images[0].secure_url,
        price: subtotal,
        qty,
        product: product._id,
        variant: variant._id,
      },
      total: subtotal * qty,
    };

    dispatch(addItemsToCart([...cartItems, cartObj]));

    setShowCheckoutDrawer(true);
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    router.push('/checkout');
  };

  return (
    <>
      {loading ? (
        <div>
          {' '}
          <Spinner />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <section className={styles.product}>
            <Images
              variant={variant}
              altText={product.title}
              discount={product.discount}
              featuredImage={featuredImage}
              setFeaturedImage={setFeaturedImage}
            />
            <section className={styles.details}>
              <h1 className='text-[2.6rem] font-bold'>{product.title}</h1>
              <Price variant={variant} discount={product.discount} />
              <form action=''>
                <Variant
                  variants={product.variant}
                  getSelectedVariant={getSelectedVariant}
                />
                {showCheckout ? (
                  <section
                    className={`cta ${styles.cta}`}
                    onClick={checkoutHandler}
                  >
                    Checkout
                  </section>
                ) : (
                  <>
                    <Stock variant={variant} qty={qty} setQty={setQty} />

                    <section
                      className={`cta ${styles.cta}`}
                      onClick={addTocartHandler}
                    >
                      Add to cart
                    </section>
                  </>
                )}
              </form>
            </section>
          </section>
          <Description description={product.description} />
          {showCheckoutDrawer && (
            <CheckoutDrawer setShowCheckoutDrawer={setShowCheckoutDrawer} />
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
