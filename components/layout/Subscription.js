import React from 'react';

import styles from '../../styles/Subscription.module.css';

const Subscription = () => {
  return (
    <>
      <h2 className='heading'>Subscribe to our Newsletter</h2>
      <section className={styles.subscribe}>
        <p className={styles.info}>
          Subscribe our newletters to get updated about offers, promotions,
          discounts, new arrivals and many more informations.
        </p>
        <form action='' className={styles.form}>
          <input
            type='email'
            name='email'
            placeholder='Please enter your email address'
            className={styles.input}
          />

          <button className='cta'>Subscribe</button>
        </form>
      </section>
    </>
  );
};

export default Subscription;
