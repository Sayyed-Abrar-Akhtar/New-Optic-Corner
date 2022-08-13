import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Card.module.css';

const Card = ({ product }) => {
  return (
    <>
      {product !== undefined ? (
        <Link href={`/product/${product._id}`} passHref>
          <section className={styles.card}>
            {product.discount
              ? product.discount > 0 && (
                  <section className={styles.badge}>
                    {product.discount}%
                  </section>
                )
              : ''}
            <section className={styles.image__container}>
              <Image
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsOey2HwAFzgJWC3pwEAAAAABJRU5ErkJggg=='
                src={
                  product && product.featured_image
                    ? product.featured_image
                    : 'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1658923247/new-optic-corner-abdul/products/vacation-glasses-optical-protection-sun_mtkiyu.jpg'
                }
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                placeholder='blur'
                alt={styles.title}
              />
              <p className={styles.info}>
                <span>
                  {product.discount && product.discount > 0 ? 'sale' : 'newin'}
                </span>
              </p>
            </section>
            <section className={styles.details}>
              <h4 className={styles.title}>{product.title && product.title}</h4>
              <p className={styles.price}>
                {product && product.discount > 0 ? (
                  <span className='flex justify-center'>
                    <span>
                      रु {''}
                      {(product.featured_price * (100 - product.discount)) /
                        100}
                    </span>
                    <span className={styles.discount_price}>
                      रु {product.featured_price}
                    </span>
                  </span>
                ) : (
                  <span>
                    रु {product.featured_price && product.featured_price}
                  </span>
                )}
              </p>
            </section>
          </section>
        </Link>
      ) : (
        <p>Product Not found</p>
      )}
    </>
  );
};

export default Card;
