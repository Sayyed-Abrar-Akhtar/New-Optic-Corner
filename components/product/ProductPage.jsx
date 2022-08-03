import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Description from './Description';
import Images from './Images';
import Price from './Price';
import Stock from './Stock';
import Variant from './Variant';
import Spinner from '../spinner/Spinner';

import styles from '../../styles/Product.module.css';

const ProductPage = () => {
  const {
    data: { product },
    loading,
    error,
  } = useSelector((state) => state.product);

  const [variant, setVariant] = useState(product.variant[0]);
  const [featuredImage, setFeaturedImage] = useState(product.featured_image);

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
                <Variant variants={product.variant} />
                <Stock variants={product.variant} />
                <section className={`cta ${styles.cta}`}>Add to cart</section>
              </form>
            </section>
          </section>
          <Description description={product.description} />
        </>
      )}
    </>
  );
};

export default ProductPage;
