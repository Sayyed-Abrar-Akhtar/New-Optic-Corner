import React from 'react';

import styles from '../../../styles/SelectedFilter.module.css';

const SelectedFilter = ({ filterArr = [] }) => {
  return (
    <section className={styles.container}>
      {filterArr.map((item, idx) => (
        <p className={styles.filter} key={idx}>
          {item}
        </p>
      ))}
    </section>
  );
};

export default SelectedFilter;
