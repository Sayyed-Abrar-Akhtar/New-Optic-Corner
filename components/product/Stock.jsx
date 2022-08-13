import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import styles from '../../styles/Product.module.css';

const Stock = ({ variant, qty, setQty }) => {
  const qtyAvailable = variant.stock;
  const min = 1;

  return (
    <>
      {qtyAvailable > 0 ? (
        <div className={styles.quantity__container}>
          <label htmlFor='quantity' className={styles.quantity__label}>
            Select Quantity
          </label>
          <div className={styles.quantity__input__container}>
            <span className={styles.quantity__icon}>
              <FaMinus
                className={styles.icon}
                onClick={(e) => {
                  qty > min ? setQty(qty - 1) : qty;
                }}
              />
            </span>
            <span className={`${styles.quantity__selected} quantity__selected`}>
              {qty > qtyAvailable ? qtyAvailable : qty}
            </span>
            <span className={styles.quantity__icon__plus}>
              <FaPlus
                className={styles.icon}
                onClick={(e) => {
                  qty < qtyAvailable ? setQty(qty + 1) : qty;
                }}
              />
            </span>
          </div>
        </div>
      ) : (
        <p className={styles.soldout}>Sold out</p>
      )}
    </>
  );
};

export default Stock;
