import React from 'react';

import styles from '../../styles/ProductGrid.module.css';
import Card from './Card';

const ProductGrid = () => {
  return (
    <>
      <h2 className='heading'>Latest Sunglasses</h2>
      <section className={styles.product__grid}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default ProductGrid;
