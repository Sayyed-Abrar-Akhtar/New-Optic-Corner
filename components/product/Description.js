import React from 'react';

import styles from '../../styles/Product.module.css';

const Description = ({ description }) => {
  const descList = description.slice('\n');
  console.log(typeof descList);
  return (
    <section className={styles.description}>
      <h4>Descriptions</h4>

      {descList.length > 0 && typeof descList === !String ? (
        descList.map((description) => (
          <li key={21 * Number(new Date().getTime())}>{description}</li>
        ))
      ) : (
        <p>{description}</p>
      )}
    </section>
  );
};

export default Description;
