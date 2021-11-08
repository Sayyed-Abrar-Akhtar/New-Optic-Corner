import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

import styles from '../../styles/Product.module.css';

const Price = () => {
  return (
    <h3 className={styles.price}>
      <span className={styles.price__discounted}>NPR 1500.00</span>
      <span className={styles.price__full}>NPR 2000.00</span>
      <span className={styles.fav}>
        <FaRegHeart className={styles.icon__heart} />
      </span>
    </h3>
  );
};

export default Price;
