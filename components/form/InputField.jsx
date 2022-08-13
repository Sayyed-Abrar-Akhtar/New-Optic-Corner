import React from 'react';

import styles from '../../styles/InputField.module.css';

const InputField = ({
  type = 'text',
  label = 'Label',
  id = 'id',
  value = 'text',
  setValue,
  sellercentral = false,
  ...otherProps
}) => {
  return (
    <div
      className={`${styles.input_group} ${
        sellercentral && styles.input_group__sellercentral
      }`}
    >
      <div>
        <input
          className={`${styles.form_control} ${
            sellercentral && styles.form_control__sellercentral
          }`}
          type={type}
          id={id}
          value={value}
          placeholder={label}
          onChange={(e) => setValue(e.target.value)}
          {...otherProps}
        />

        <label
          className={`${styles.input_group__text} ${
            sellercentral && styles.input_group__text__sellercentral
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputField;
