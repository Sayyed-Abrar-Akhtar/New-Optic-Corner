import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Nav from './Nav';
import MobileNavigation from '../mobile-navigation/MobileNavigation.jsx';
import styles from '../../styles/Header.module.css';

const Header = ({ cartItems }) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.logo}>
          <Link href='/' passHref>
            <a className={styles.logo__link}>
              <Image
                src='/logo.svg'
                alt='New Optic Corner'
                width={600}
                height={400}
              />
            </a>
          </Link>
        </section>
        <Nav />
        <MobileNavigation />
      </header>
    </>
  );
};

export default Header;
