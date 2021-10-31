import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Header.module.css';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <a href='#' className={styles.logo__link}>
          <Image
            src='/logo.svg'
            alt='New Optic Corner'
            width={600}
            height={400}
          />
        </a>
      </section>
      <Nav />
    </header>
  );
};

export default Header;
