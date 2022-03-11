import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaHashtag } from 'react-icons/fa';

import styles from '../../styles/ProductsList.module.css';

const ProductsList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title__bar}>
        <div className={styles.title}>
          <FaHashtag />
        </div>
        <div className={styles.title}>
          <p>Name</p>
        </div>
        <div className={styles.title}>
          <p>Price</p>
        </div>
        <div className={styles.title}>
          <p>Stock</p>
        </div>
        <div className={styles.title}>
          <p>Available Variants</p>
        </div>
      </div>

      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8,
        9,
      ].map((i, idx) => (
        <Link href='/' key={idx}>
          <a className={styles.lists}>
            <div className={styles.img_container}>
              <Image
                className={styles.img}
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gc75c8d6e4_1920_flgt6w.jpg'
                width={500}
                height={500}
                alt='product name'
              />
            </div>
            <p className={`${styles.info} ${styles.product__name}`}>
              Cool mens Summer Eyewear
            </p>
            <p className={styles.info}>Npr. 1500</p>
            <p className={styles.info}>5</p>
            <p className={styles.info}>3 varaints</p>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
