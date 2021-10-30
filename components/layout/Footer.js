import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.company}>Company Details</section>
      <section className={styles.dev}>
        <p className={styles.dev__job}>Designed and developed by</p>
        <h2 className={styles.dev__name}>
          <a
            href='https://www.sayyedabrarakhtar.com.np/'
            className={styles.dev__link}
            target='_blank'
            rel='noreferrer'
          >
            Sayyed Abrar Akhtar
          </a>
        </h2>
      </section>
    </footer>
  );
};

export default Footer;
