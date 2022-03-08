import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import styles from '../../styles/CategoryBanner.module.css';
import Btn from '../Btn';

const CategoryBanner = ({ heading = 'category', categories = [] }) => {
  return (
    <>
      <h2 className='heading'>{heading}</h2>
      <section className={styles.category}>
        {categories && (
          <>
            {categories.map((category, index) => (
              <section className={styles.grid__item} key={index}>
                <section className={styles.image__container}>
                  {category.image.url && (
                    <Image
                      className={styles.category__image}
                      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                      src={`${category.image.url}`}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                      placeholder='blur'
                      alt={category.title}
                    />
                  )}
                </section>
                <section className={styles.caption}>
                  <h2 className={styles.title}>
                    {category.title || 'Sunglasses'}
                  </h2>
                  <Btn to={category.cta.link} text={category.cta.text} />
                </section>
              </section>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default CategoryBanner;
