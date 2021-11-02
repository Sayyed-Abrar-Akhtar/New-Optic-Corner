import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Prescription.module.css';

const Prescription = () => {
  return (
    <section className={styles.prescription}>
      <h2 className='heading'>Order Prescription Glasses Online</h2>
      <section className={styles.info}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635762838/snellen-gd808878d7_1280_zzyc7i.png'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
            alt={styles.title}
          />
        </section>
        <section className={styles.detail__container}>
          <h3 className={styles.title}>How to order prescription glasses?</h3>
          <p className={styles.details}>
            Still worried where to buy spectacles? New Optic Corner an Optic
            Shop offers you prescription glasses online with more than 100
            fashion styles of frames to choose from that fit your appearance and
            provide you with the compliments you deserve. Our high-quality
            lenses give you sharper vision along with our state-of-the-art
            equipment which is crafted from the factory directly. With no
            &ldquo;middlemen&rdquo;, no retail-space overhead, we bring the best
            quality eyewear at affordable prices direct to you. We are a
            trustworthy online retailer of eyeglasses, try it now.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Prescription;
