import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Product.module.css';

const Images = () => {
  return (
    <section className={styles.images}>
      <section className={styles.image__container}>
        <Image
          className={styles.image}
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
          src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gc75c8d6e4_1920_flgt6w.jpg'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          placeholder='blur'
          alt={'title' || 'Product deatails'}
        />
        <span className={styles.price__discount}>-25%</span>
      </section>
      <section className={styles.thumbnail__container}></section>
    </section>
  );
};

export default Images;
