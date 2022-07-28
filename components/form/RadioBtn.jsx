import React, { useEffect } from 'react';

import { IoRadioButtonOn, IoRadioButtonOff } from 'react-icons/io5';

import styles from '../../styles/RadioBtn.module.css';

const RadioBtn = ({ label, ID, name, val, setVal }) => {
  return (
    <>
      <input
        className={styles.radio_input}
        type='radio'
        id={ID}
        name={name}
        value={val}
        onChange={(e) => setVal(e.target.nextElementSibling.innerText)}
        hidden
      />
      <label
        htmlFor={ID}
        className='flex items-center my-4 font-semibold leading-4'
      >
        <IoRadioButtonOn className={styles.checked} />
        <IoRadioButtonOff className={styles.unchecked} />
        {label}
      </label>
    </>
  );
};

export default RadioBtn;
