import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { menus } from '../../utils/menuData';
import styles from '../../styles/Nav.module.css';
import { useSession } from 'next-auth/react';
import {
  ADMIN,
  AUTHENTICATED,
  LOADING,
  STAFF,
  UNAUTHENTICATED,
  USER,
} from '../../constant/GlobalConstants';
import MenuList from './MenuList';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <MenuList />
    </nav>
  );
};

export default Nav;
