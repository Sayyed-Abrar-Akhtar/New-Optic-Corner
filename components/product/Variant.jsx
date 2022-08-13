import React from 'react';

import styles from '../../styles/Product.module.css';
const Variant = ({ variants, getSelectedVariant }) => {
  return (
    <section className={styles.variant}>
      <p className={styles.variant__name}>Colors Available</p>
      <div className={styles.variant__values}>
        {variants.map((item, idx) => (
          <span
            key={idx}
            style={{ backgroundColor: `${item.code}` }}
            className={styles.variant__value}
            onClick={() => getSelectedVariant(idx)}
          >
            <p className={styles.variant__tooltip}>{item.color}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Variant;
