import React from 'react';
import Link from 'next/link';

import { menus } from '../../utils/menuData';
import styles from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.lists}>
        {menus.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <a className={styles.link} id={menu.id}>
              <li className={styles.list}>{menu.text}</li>
            </a>
          </Link>
        ))}
        <Link href='/cart'>
          <a href='/cart' className={styles.link} id='cart'>
            <li className={styles.list}>Cart</li>
          </a>
        </Link>
        <Link href='/account'>
          <a href='/account' className={styles.link} id='account'>
            <li className={styles.list}>Account</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
