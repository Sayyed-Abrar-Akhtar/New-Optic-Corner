import React from 'react';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import styles from '../../styles/Hero.module.css';
import Btn from '../Btn';

const HeroBanner = ({ hero = {} }) => {
  return (
    <section className={styles.container}>
      {hero && (
        <>
          <section className={styles.img}>
            {hero && hero.image.url && (
              <Image
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                src={`${hero.image.url}`}
                layout='fill'
                objectFit='cover'
                objectPosition='right'
                placeholder='blur'
                alt={hero.title}
              />
            )}
          </section>
          <section className={styles.caption}>
            <h1 className={styles.title}>
              {hero.title || 'Best depawali deals on Eyewear'}
            </h1>
            <p className={styles.subtitle}>
              {hero.subtitle ||
                'Up to 50% special depawali discount on trendy sunglasses and power glasses online in Nepal.'}
            </p>
            <Btn to='/products' text={hero.cta.text} />
          </section>
        </>
      )}
    </section>
  );
};

export default HeroBanner;
