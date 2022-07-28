import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaHashtag } from 'react-icons/fa';

import styles from '../../../styles/ProductsList.module.css';

const ProductsList = ({ products }) => {
  console.log(products);
  let sum = 0;

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
          <p>Stock</p>
        </div>
        <div className={styles.title}>
          <p>Variants</p>
        </div>
      </div>

      {products.map((product, idx) => (
        <Link href='/' key={idx}>
          <a className={styles.lists}>
            <div className={styles.img_container}>
              <Image
                className={styles.img}
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                src={
                  product.variant.length > 0 &&
                  product.variant[0].images.length > 0
                    ? product.variant[0].images[0].secure_url
                    : 'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gc75c8d6e4_1920_flgt6w.jpg'
                }
                width={500}
                height={500}
                alt={product.title}
              />
            </div>
            <p className={`${styles.info} ${styles.product__name}`}>
              {product.title}
            </p>
            <p className={styles.info}>
              {product.variant.reduce(
                (partialSum, a) => partialSum + a.stock,
                0
              )}
            </p>
            <p className={styles.info}>
              {product.variant.length}{' '}
              {product.variant.length > 1 ? 'variants' : ' variant'}
            </p>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
