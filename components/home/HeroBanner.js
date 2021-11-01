import React, { useEffect } from 'react';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import styles from '../../styles/Hero.module.css';

const HeroBanner = () => {
  const { theme, loading, error } = useSelector((state) => state.getTheme);

  return (
    <section className={styles.hero}>
      {loading ? (
        'loading...'
      ) : error ? (
        'error'
      ) : (
        <>
          <section>
            <Image
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
              src={`${theme.herobanner.image.url}`}
              layout='fill'
              objectFit='cover'
              objectPosition='top'
              placeholder='blur'
            />
          </section>
          <section className={styles.caption}>
            <h1 className={styles.title}>
              {theme.herobanner.title || 'Best depawali deals on Eyewear'}
            </h1>
            <p className={styles.subtitle}>
              {theme.herobanner.subtitle ||
                'Up to 50% special depawali discount on trendy sunglasses and power glasses online in Nepal.'}
            </p>
            <a href='#' className='cta'>
              {theme.herobanner.cta.text || 'Grab now'}
            </a>
          </section>
        </>
      )}
    </section>
  );
};

export default HeroBanner;
