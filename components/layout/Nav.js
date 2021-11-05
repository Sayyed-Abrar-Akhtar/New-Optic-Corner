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
            <a className={styles.link}>
              <li className={styles.list} id={menu.id}>
                {menu.text}
              </li>
            </a>
          </Link>
        ))}
        <Link href='/cart'>
          <a className={styles.link}>
            <li className={styles.list} id='cart'>
              Cart
            </li>
          </a>
        </Link>
        <Link href='/account'>
          <a className={styles.link}>
            <li className={styles.list} id='account'>
              Account
            </li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
