import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Promotion.module.css';
import Btn from '../Btn';

const Promotion = ({ offer = {} }) => {
  return (
    <>
      <h2 className='heading'>{offer.heading}</h2>
      <section className={styles.promotion}>
        <section className={styles.banner__container}>
          <section className={styles.image__container}>
            <Image
              className={styles.image}
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
              src={offer.image.url}
              layout='fill'
              objectFit='cover'
              objectPosition='top'
              placeholder='blur'
              alt={'promotion banner' || 'title'}
            />
          </section>
          <section className={styles.details}>
            <h3 className={styles.title}>{offer.title}</h3>
            <p className={styles.detail}>{offer.subtitle}</p>
            <Btn to='/offers' text={offer.cta.text} extraClass={styles.cta} />
          </section>
        </section>
      </section>
    </>
  );
};

export default Promotion;
