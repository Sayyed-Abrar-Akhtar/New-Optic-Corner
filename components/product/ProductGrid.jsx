import React from 'react';

import styles from '../../styles/ProductGrid.module.css';
import Card from './Card';

const ProductGrid = ({ title = 'Add title', products }) => {
  return (
    <>
      <h2 className='heading'>{title}</h2>
      <section className={styles.product__grid}>
        {products ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p>No products found!</p>
        )}
      </section>
    </>
  );
};

export default ProductGrid;
