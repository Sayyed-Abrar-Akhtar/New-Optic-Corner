import React from 'react';

import { BsFilter } from 'react-icons/bs';

import styles from '../../styles/Filter.module.css';

const Filter = ({ type = 'text', placeholder = 'category', val, setVal }) => {
  switch (type) {
    case 'text' || 'number' || 'email':
      return (
        <div className={styles.container}>
          <span className={styles.icon}>
            <BsFilter />
          </span>
          <div className={styles.form__control}>
            <input
              className={styles.input}
              type='text'
              placeholder={placeholder}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>
        </div>
      );
  }
};

export default Filter;
