import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Card.module.css';

const Card = () => {
  return (
    <Link href='/' passHref>
      <section className={styles.card}>
        <section className={styles.badge}>-10%</section>
        <section className={styles.image__container}>
          <Image
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsOey2HwAFzgJWC3pwEAAAAABJRU5ErkJggg=='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635684605/prod4_unm0ot.jpg'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            placeholder='blur'
            alt={styles.title}
          />
          <p className={styles.info}>
            <span>newin</span>
          </p>
        </section>
        <section className={styles.details}>
          <h4 className={styles.title}>
            Latest mens Sunglasses night vision and polarized{' '}
          </h4>
          <p className={styles.price}>NPR 1500.00</p>
        </section>
      </section>
    </Link>
  );
};

export default Card;
