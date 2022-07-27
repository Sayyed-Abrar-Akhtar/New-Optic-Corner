import React from 'react';
import { IoMdCheckboxOutline, IoMdSquareOutline } from 'react-icons/io';

import styles from '../../styles/CheckBox.module.css';

const CheckBox = ({ ID, label, checked, setChecked }) => {
  return (
    <>
      <label htmlFor={ID} className={`${styles.checkbox_label} mb-6`}>
        <span>
          {checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline />}{' '}
        </span>
        <p>{label}</p>
      </label>
      <input
        type='checkbox'
        id={ID}
        value={checked}
        onChange={() => setChecked(!checked)}
      />
    </>
  );
};

export default CheckBox;
