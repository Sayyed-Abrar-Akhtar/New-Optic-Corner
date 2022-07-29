import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Card.module.css';

const Card = ({ product }) => {
  return (
    <Link href={`/product/`} passHref>
      <section className={styles.card}>
        {product.discount !== undefined
          ? product.discount > 0 && (
              <section className={styles.badge}>{product.discount}%</section>
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
              {product.discount !== undefined && product.discount > 0
                ? 'sale'
                : 'newin'}
            </span>
          </p>
        </section>
        <section className={styles.details}>
          <h4 className={styles.title}>{product.title && product.title}</h4>
          <p className={styles.price}>
            NPR {product.featured_price && product.featured_price}.00
          </p>
        </section>
      </section>
    </Link>
  );
};

export default Card;
