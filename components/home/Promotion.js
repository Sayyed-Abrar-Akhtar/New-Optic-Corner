import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Promotion.module.css';

const Promotion = () => {
  return (
    <>
      <h2 className='heading'>Offers</h2>
      <section className={styles.promotion}>
        <section className={styles.banner__container}>
          <section className={styles.image__container}>
            <Image
              className={styles.image}
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
              src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1636106222/pxfuel.com_hfcf2s.jpg'
              layout='fill'
              objectFit='cover'
              objectPosition='top'
              placeholder='blur'
              alt={'promotion banner' || 'title'}
            />
          </section>
          <section className={styles.details}>
            <h3 className={styles.title}>Buy 2 get 1 free</h3>
            <p className={styles.detail}>
              Buy 2 sunglasses, get 3rd for FREE! (Free pair cannot be
              prescription. However, you can save on a 3rd prescription pair
              because you only need to order lenses - see Prescription Lens
              Replacement Pair on the Parts & Accessories page.) After 2 pair
              are placed in your cart, you will be given the opportunity to
              choose the free pair. The price on the available items will be
              NPR0.00. Click Sunglasses or Prescription Sunglasses tab above to
              Start adding eyewear to your cart This offer may not be available
              with other discounts or coupons.
            </p>
            <Link href='/'>
              <a className={`cta ${styles.cta}`}>Get it now!</a>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default Promotion;
