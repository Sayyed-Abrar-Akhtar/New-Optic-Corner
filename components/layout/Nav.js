import React from 'react';

import styles from '../../styles/Nav.module.css';

import MenuList from './MenuList';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <MenuList />
    </nav>
  );
};

export default Nav;
