import React from 'react';

import styles from '../../styles/Product.module.css';

const Price = ({ variant, discount }) => {
  return (
    <h3 className={styles.price}>
      <span className='text-[1.65rem] font-semibold'>
        रु{' '}
        {discount
          ? variant.price * ((100 - discount) / 100).toFixed(2)
          : variant.price}
      </span>
      {discount ? (
        <span
          className={`${styles.discount_price} text-[1.65rem] ml-4 font-semibold`}
        >
          रु {variant.price}
        </span>
      ) : null}
    </h3>
  );
};

export default Price;
