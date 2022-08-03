import React from 'react';

import styles from '../../styles/Product.module.css';

const Description = ({ description }) => {
  return (
    <section className={styles.description}>
      <h4>Descriptions</h4>
      <p>{description}</p>
    </section>
  );
};

export default Description;
