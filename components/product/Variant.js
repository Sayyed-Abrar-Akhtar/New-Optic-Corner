import React from 'react';

import styles from '../../styles/Product.module.css';
const Variant = () => {
  return (
    <section className={styles.variant}>
      <p className={styles.variant__name}>Colors Available</p>
      <div className={styles.variant__values}>
        {[
          { color: 'burgundy', code: '#800020' },
          { color: 'off white', code: '#faf9f6' },
          { color: 'magenta red', code: '#FF00FF' },
        ].map((item, idx) => (
          <span
            key={idx}
            style={{ backgroundColor: `${item.code}` }}
            className={styles.variant__value}
          >
            <p className={styles.variant__tooltip}>{item.color}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Variant;
