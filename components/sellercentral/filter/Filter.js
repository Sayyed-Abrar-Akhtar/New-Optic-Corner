import React from 'react';

import { BsFilter, BsSearch } from 'react-icons/bs';
import { BiSortAlt2 } from 'react-icons/bi';

import styles from '../../../styles/Filter.module.css';
import {
  FILTER_CATEGORY,
  FILTER_SEARCH,
  FILTER_SORT,
  FILTER_TAG,
  INPUT_TYPE_CHECKBOX,
  INPUT_TYPE_EMAIL,
  INPUT_TYPE_NUMBER,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_TEXT,
} from '../../../constant/GlobalConstants';

const Filter = ({
  type = 'text',
  placeholder = 'category',
  val,
  setVal,
  arr = ['choose'],
  filterType,
  filterArr,
  setFilterArr,
  setLoading,
  loading,
}) => {
  let arrys = filterArr;
  const onChangeHandler = (e, type) => {
    setFilterArr([]);
    if (
      type === FILTER_SORT ||
      type === FILTER_SEARCH ||
      type === FILTER_CATEGORY ||
      type === FILTER_TAG
    ) {
      console.log('entered');
      checkSorted(arrys, e.target.value, type);
    } else {
      if (
        e.target.value !== '' &&
        !arrys.includes(`${type}: ${e.target.value}`)
      ) {
        console.log('arrys before: ', arrys);
        arrys.push(`${type}: ${e.target.value}`);
        console.log('arrys after push: ', arrys);
      }
    }

    setFilterArr(arrys);
    setLoading(!loading);
  };

  const checkSorted = (arr, sortValue, filterType) => {
    let index = -1;
    arr.forEach((element, idx) => {
      if (element.split(':')[0] === filterType) {
        index = idx;
        return;
      }
    });

    if (index > -1) {
      console.log(index);
      arr[index] = `${filterType}: ${sortValue}`;
    } else {
      arr[arr.length] = `${filterType}: ${sortValue}`;
    }
  };

  switch (type) {
    case INPUT_TYPE_TEXT || INPUT_TYPE_NUMBER || INPUT_TYPE_EMAIL:
      return (
        <div className={styles.container}>
          <span className={styles.icon}>
            {filterType === FILTER_SEARCH ? <BsSearch /> : <BsFilter />}
          </span>
          <div className={styles.form__control}>
            <input
              className={styles.input}
              type={type}
              placeholder={placeholder}
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onBlur={(e) => onChangeHandler(e, FILTER_SEARCH)}
              onKeyUp={(e) =>
                e.key === 'Enter' && onChangeHandler(e, FILTER_SEARCH)
              }
            />
          </div>
        </div>
      );
    case INPUT_TYPE_CHECKBOX:
      return (
        <div className={styles.container}>
          <span className={styles.icon}>
            {filterType === FILTER_SORT ? <BiSortAlt2 /> : <BsFilter />}
          </span>
          <div className={`${styles.form__control} ${styles.input__select}`}>
            <select
              className={`${styles.input} ${styles.select}`}
              onChange={(e) => onChangeHandler(e, filterType)}
            >
              {arr.map((item, idx) => (
                <option value={item.value} key={idx} className={styles.option}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    case INPUT_TYPE_RADIO:
      return (
        <div className={styles.container}>
          <span className={styles.icon}>
            {filterType === FILTER_SORT ? <BiSortAlt2 /> : <BsFilter />}
          </span>
          <div className={`${styles.form__control} ${styles.input__select}`}>
            <select
              className={`${styles.input} ${styles.select}`}
              onChange={(e) => onChangeHandler(e, filterType)}
            >
              {arr.map((item, idx) => (
                <option value={item.value} key={idx} className={styles.option}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
  }
};

export default Filter;
