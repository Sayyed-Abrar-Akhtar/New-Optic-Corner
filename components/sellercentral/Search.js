import React from 'react';

import { BsSearch } from 'react-icons/bs';

import styles from '../../styles/Search.module.css';

const Search = ({ placeholder, val, setVal }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <BsSearch />
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
};

export default Search;
