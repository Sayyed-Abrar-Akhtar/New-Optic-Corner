import React from 'react';

import styles from '../../styles/InputField.module.css';

const InputField = ({
  type = 'text',
  label = 'Label',
  id = 'id',
  value = 'text',
  setValue,
}) => {
  return (
    <div className={styles.input_group}>
      <div>
        <input
          className={styles.form_control}
          type={type}
          id={id}
          value={value}
          placeholder={label}
          onChange={(e) => setValue(e.target.value)}
        />

        <label className={styles.input_group__text} htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputField;
