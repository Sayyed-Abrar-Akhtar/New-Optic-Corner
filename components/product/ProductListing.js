import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

import styles from '../../styles/ProductListing.module.css';
import Filter from '../sellercentral/Filter';
import Search from '../sellercentral/Search';

const ProductListing = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Search placeholder='Filter products' val={search} setVal={setSearch} />
        <div className={styles.filter}>
          <Filter />
          <Filter />
        </div>
        <div className={styles.sort__products}></div>
      </div>
    </div>
  );
};

export default ProductListing;
