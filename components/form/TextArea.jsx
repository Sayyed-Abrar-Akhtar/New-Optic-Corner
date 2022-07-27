import React from 'react';

import styles from '../../styles/TextArea.module.css';

const TextArea = ({
  val = 'Product Description...',
  setVal,
  label = 'Description',
  id = 'test-desc',
  sellercentral = false,
  placeholder = 'placeholder',
}) => {
  return (
    <div
      className={`${styles.input_group} ${
        sellercentral && styles.input_group_sellercentral
      }`}
    >
      <textarea
        className={`${styles.form_control}  ${
          sellercentral && styles.form_control_sellercentral
        }`}
        placeholder={placeholder}
        defaultValue={val}
        id={id}
        onChange={(e) => setVal(e.target.value)}
      ></textarea>
      <label
        htmlFor={id}
        className={`${styles.label}  ${
          sellercentral && styles.label_sellercentral
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
