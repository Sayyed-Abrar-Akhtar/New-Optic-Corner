import React from 'react';

import styles from '../../styles/ProductGrid.module.css';
import Card from './Card';

const ProductGrid = ({ title = 'Add title' }) => {
  return (
    <>
      <h2 className='heading'>{title}</h2>
      <section className={styles.product__grid}>
        <Card productId='123' />
        <Card productId='123' />
        <Card productId='123' />
        <Card productId='123' />
      </section>
    </>
  );
};

export default ProductGrid;
